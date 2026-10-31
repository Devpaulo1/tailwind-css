import Avatar from '../ui/Avatar'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import KpiTile from '../ui/KpiTile'
import { activity } from '../../data/activity'
import { kpis } from '../../data/kpis'
import { dashboardNav } from '../../data/navigation'

const revenue = [
  { month: 'Fev', value: 46 },
  { month: 'Mar', value: 54 },
  { month: 'Abr', value: 48 },
  { month: 'Mai', value: 63 },
  { month: 'Jun', value: 58 },
  { month: 'Jul', value: 71 },
  { month: 'Ago', value: 76 },
  { month: 'Set', value: 88 },
]

function MiniDashboard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
      <div className="flex">
        <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-slate-50/70 p-4 lg:flex">
          <div className="flex items-center gap-2 px-1">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-white">
              <Icon name="zap" className="size-4" />
            </span>
            <span className="text-sm font-bold tracking-tight">Nimbus</span>
          </div>

          <nav aria-label="Menu do painel" className="mt-6 flex-1">
            <ul className="space-y-1">
              {dashboardNav.map((item) => (
                <li key={item.label}>
                  <a
                    href="#mini-dashboard"
                    aria-current={item.active ? 'page' : undefined}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition ${
                      item.active
                        ? 'bg-primary/10 font-semibold text-blue-700'
                        : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-foreground'
                    }`}
                  >
                    <Icon name={item.icon} className="size-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-surface p-2.5">
            <Avatar initials="AR" alt="Ana Ribeiro" size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold">Ana Ribeiro</p>
              <p className="truncate text-[11px] text-muted">Plano Pro</p>
            </div>
            <button
              type="button"
              aria-label="Sair da conta"
              className="grid size-7 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Icon name="logout" className="size-4" />
            </button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex gap-1 overflow-x-auto border-b border-border bg-slate-50/70 px-3 py-2 lg:hidden">
            {dashboardNav.map((item) => (
              <button
                key={item.label}
                type="button"
                aria-current={item.active ? 'page' : undefined}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
                  item.active
                    ? 'bg-primary/10 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon name={item.icon} className="size-3.5" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-6">
            <div>
              <p className="text-xs text-muted">Segunda-feira, 31 de outubro</p>
              <h3 className="mt-0.5 text-lg font-bold tracking-tight">
                Visão geral
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon name="calendar" className="size-4" />
                <span className="hidden sm:inline">Últimos 30 dias</span>
                <span className="sm:hidden">30 dias</span>
                <Icon name="chevronDown" className="size-3.5" />
              </button>
              <Button size="sm">
                <Icon name="plus" className="size-4" />
                <span className="hidden sm:inline">Novo pedido</span>
                <span className="sm:hidden">Novo</span>
              </Button>
            </div>
          </div>

          <div className="space-y-5 p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {kpis.map((kpi) => (
                <KpiTile key={kpi.id} {...kpi} />
              ))}
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">
              <section
                aria-labelledby="dashboard-chart-title"
                className="min-w-0 rounded-2xl border border-border bg-surface p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4
                      id="dashboard-chart-title"
                      className="text-sm font-bold tracking-tight"
                    >
                      Receita por mês
                    </h4>
                    <p className="mt-0.5 text-xs text-muted">
                      Últimos 8 meses
                    </p>
                  </div>
                  <Badge variant="success">+12,4%</Badge>
                </div>

                <div className="mt-6 flex h-36 items-end gap-1 sm:gap-3">
                  {revenue.map((item, index) => (
                    <div
                      key={item.month}
                      className={`flex-1 rounded-t-lg ${
                        index < 3 ? 'hidden sm:block' : ''
                      } ${
                        index === revenue.length - 1
                          ? 'bg-primary'
                          : 'bg-primary/20'
                      }`}
                      style={{ height: `${item.value}%` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <div className="mt-2 flex gap-1 sm:gap-3">
                  {revenue.map((item, index) => (
                    <span
                      key={item.month}
                      className={`flex-1 text-center text-[10px] font-medium text-muted ${
                        index < 3 ? 'hidden sm:block' : ''
                      }`}
                    >
                      {item.month}
                    </span>
                  ))}
                </div>
              </section>

              <section
                aria-labelledby="dashboard-activity-title"
                className="min-w-0 rounded-2xl border border-border bg-surface p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4
                    id="dashboard-activity-title"
                    className="text-sm font-bold tracking-tight"
                  >
                    Atividade recente
                  </h4>
                  <button
                    type="button"
                    className="rounded text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Ver tudo
                  </button>
                </div>

                <ul className="mt-4 divide-y divide-border">
                  {activity.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                    >
                      <Avatar
                        initials={item.initials}
                        alt={item.name}
                        size="sm"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs text-slate-600">
                          <span className="font-semibold text-foreground">
                            {item.name}
                          </span>{' '}
                          {item.action}
                        </p>
                        <p className="mt-0.5 text-[11px] text-muted">
                          {item.time}
                        </p>
                      </div>
                      <Badge
                        variant={item.status.variant}
                        className="shrink-0"
                      >
                        {item.status.label}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniDashboard
