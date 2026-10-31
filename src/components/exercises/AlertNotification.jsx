import { useState } from 'react'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { alerts } from '../../data/alerts'

const styles = {
  info: {
    container: 'border-primary/20 bg-primary/5',
    icon: 'text-blue-700',
    iconName: 'info',
  },
  success: {
    container: 'border-success/20 bg-success/5',
    icon: 'text-green-800',
    iconName: 'checkCircle',
  },
  warning: {
    container: 'border-warning/30 bg-warning/10',
    icon: 'text-amber-800',
    iconName: 'alertTriangle',
  },
  danger: {
    container: 'border-danger/20 bg-danger/5',
    icon: 'text-red-700',
    iconName: 'alertCircle',
  },
}

function AlertNotification() {
  const [visible, setVisible] = useState(alerts)

  function dismiss(id) {
    setVisible((current) => current.filter((alert) => alert.id !== id))
  }

  return (
    <div>
      {visible.length > 0 ? (
        <ul className="space-y-3">
          {visible.map((alert) => {
            const style = styles[alert.variant]

            return (
              <li
                key={alert.id}
                className={`rounded-2xl border ${style.container}`}
              >
                <div
                  role={alert.variant === 'danger' ? 'alert' : 'status'}
                  className="flex items-start gap-3 p-4"
                >
                  <Icon
                    name={style.iconName}
                    className={`mt-0.5 size-5 shrink-0 ${style.icon}`}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {alert.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {alert.message}
                    </p>
                    {alert.action ? (
                      <button
                        type="button"
                        onClick={() => dismiss(alert.id)}
                        className={`mt-2 rounded text-sm font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${style.icon}`}
                      >
                        {alert.action}
                      </button>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => dismiss(alert.id)}
                    aria-label={`Fechar notificação: ${alert.title}`}
                    className="grid size-7 shrink-0 place-items-center rounded-lg text-slate-500 transition hover:bg-black/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Icon name="x" className="size-4" />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-slate-50/60 p-8 text-center">
          <Icon
            name="checkCircle"
            className="mx-auto size-6 text-green-800"
          />
          <p className="mt-2 text-sm font-medium text-slate-600">
            Nenhuma notificação pendente.
          </p>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted" aria-live="polite">
          {visible.length} de {alerts.length} alertas visíveis
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setVisible(alerts)}
          disabled={visible.length === alerts.length}
        >
          Restaurar alertas
        </Button>
      </div>
    </div>
  )
}

export default AlertNotification
