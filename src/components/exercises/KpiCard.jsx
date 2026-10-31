import KpiTile from '../ui/KpiTile'
import { kpis } from '../../data/kpis'

function KpiCard() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {kpis.map((kpi) => (
          <KpiTile key={kpi.id} {...kpi} />
        ))}
      </div>

      <p className="mt-4 text-xs leading-5 text-muted">
        A tendência é comunicada por seta, sinal e texto — não apenas pela cor.
      </p>
    </div>
  )
}

export default KpiCard
