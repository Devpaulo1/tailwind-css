import Icon from './Icon'
import { formatCurrency, formatNumber } from '../../utils/format'

const formatters = {
  currency: formatCurrency,
  number: formatNumber,
  percent: (value) => `${value.toLocaleString('pt-BR')}%`,
}

function KpiTile({ label, value, format = 'number', delta, direction, comparison, series }) {
  const deltaIsUp = direction === 'up'
  const maxValue = Math.max(...series)

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <p className="text-sm font-medium text-muted">{label}</p>

      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl xl:text-3xl">
          {formatters[format](value)}
        </p>

        <div
          className="flex h-10 w-14 shrink-0 items-end gap-1 sm:w-20"
          aria-hidden="true"
        >
          {series.map((point, index) => (
            <div
              key={index}
              className={`flex-1 rounded-t-sm ${
                index === series.length - 1 ? 'bg-primary' : 'bg-primary/20'
              }`}
              style={{ height: `${(point / maxValue) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold ${
            deltaIsUp
              ? 'bg-success/10 text-green-800'
              : 'bg-danger/10 text-red-700'
          }`}
        >
          <Icon
            name={deltaIsUp ? 'trendingUp' : 'trendingDown'}
            className="size-3.5"
          />
          {deltaIsUp ? '+' : '-'}
          {delta.toLocaleString('pt-BR')}%
        </span>
        <span className="text-muted">{comparison}</span>
      </div>
    </div>
  )
}

export default KpiTile
