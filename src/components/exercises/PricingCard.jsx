import { useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import { plans } from '../../data/plans'
import { formatCurrency } from '../../utils/format'

function PlanCard({ plan, annual }) {
  const price = annual ? plan.annual : plan.monthly

  return (
    <Card
      as="article"
      className={`relative flex flex-col p-6 ${
        plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
      }`}
    >
      {plan.popular ? (
        <Badge
          variant="primary"
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white ring-primary"
        >
          <Icon name="sparkles" className="size-3.5" />
          Mais popular
        </Badge>
      ) : null}

      <h3 className="text-base font-bold tracking-tight">{plan.name}</h3>
      <p className="mt-1 text-sm leading-6 text-muted">{plan.description}</p>

      <p className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight">
          {formatCurrency(price)}
        </span>
        <span className="text-sm text-muted">/mês</span>
      </p>
      <p className="mt-1 text-xs text-muted">
        {annual
          ? `Cobrado ${formatCurrency(price * 12)} por ano`
          : 'Cobrança mensal, cancele quando quiser'}
      </p>

      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2">
            <span
              className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full ${
                feature.included
                  ? 'bg-success/15 text-green-800'
                  : 'bg-slate-100 text-slate-500'
              }`}
              aria-hidden="true"
            >
              <Icon
                name={feature.included ? 'check' : 'x'}
                className="size-3"
              />
            </span>
            <span
              className={
                feature.included ? 'text-slate-700' : 'text-slate-500 line-through'
              }
            >
              <span className="sr-only">
                {feature.included ? '' : 'Indisponível: '}
              </span>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Button
          fullWidth
          variant={plan.popular ? 'primary' : 'secondary'}
          aria-label={`${plan.cta} — plano ${plan.name}`}
        >
          {plan.cta}
        </Button>
      </div>
    </Card>
  )
}

function PricingCard() {
  const [annual, setAnnual] = useState(false)

  const toggleClasses = (isActive) =>
    `rounded-full px-4 py-1.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
      isActive
        ? 'bg-surface text-foreground shadow-sm'
        : 'text-slate-600 hover:text-foreground'
    }`

  return (
    <div>
      <div
        role="group"
        aria-label="Periodicidade de cobrança"
        className="mx-auto flex w-fit items-center gap-1 rounded-full border border-border bg-slate-100 p-1"
      >
        <button
          type="button"
          onClick={() => setAnnual(false)}
          aria-pressed={!annual}
          className={toggleClasses(!annual)}
        >
          Mensal
        </button>
        <button
          type="button"
          onClick={() => setAnnual(true)}
          aria-pressed={annual}
          className={toggleClasses(annual)}
        >
          Anual
          <span className="ml-1.5 rounded-full bg-success/10 px-1.5 py-0.5 text-[11px] font-bold text-green-800">
            -20%
          </span>
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-muted" aria-live="polite">
        {annual
          ? 'Você economiza 20% pagando anualmente.'
          : 'Alterne para anual e economize 20%.'}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} annual={annual} />
        ))}
      </div>
    </div>
  )
}

export default PricingCard
