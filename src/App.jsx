import AlertNotification from './components/exercises/AlertNotification'
import BadgeAvatar from './components/exercises/BadgeAvatar'
import ButtonSystem from './components/exercises/ButtonSystem'
import KpiCard from './components/exercises/KpiCard'
import LoginForm from './components/exercises/LoginForm'
import MiniDashboard from './components/exercises/MiniDashboard'
import PricingCard from './components/exercises/PricingCard'
import ProductCard from './components/exercises/ProductCard'
import ProfileCard from './components/exercises/ProfileCard'
import ResponsiveNavbar from './components/exercises/ResponsiveNavbar'
import Container from './components/layout/Container'
import ExerciseSection from './components/layout/ExerciseSection'
import Badge from './components/ui/Badge'
import Icon from './components/ui/Icon'
import { exercises } from './data/exercises'

const demos = {
  'button-system': ButtonSystem,
  'badge-avatar': BadgeAvatar,
  'profile-card': ProfileCard,
  'product-card': ProductCard,
  'login-form': LoginForm,
  'kpi-card': KpiCard,
  'pricing-card': PricingCard,
  'alert-notification': AlertNotification,
  'responsive-navbar': ResponsiveNavbar,
  'mini-dashboard': MiniDashboard,
}

const highlights = [
  { value: '10', label: 'exercícios' },
  { value: 'React 19', label: 'componentes' },
  { value: 'Tailwind 4', label: 'utilities' },
]

function App() {
  return (
    <div id="top" className="min-h-svh">
      <header className="border-b border-border bg-surface">
        <Container className="py-10 sm:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Badge variant="primary">Atividade · Tailwind CSS</Badge>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
                Galeria de componentes com React e Tailwind
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Dez exercícios que exploram utilities, componentização, props,
                responsividade e acessibilidade dentro de uma mesma linguagem
                visual.
              </p>
            </div>

            <dl className="grid w-full max-w-md grid-cols-3 gap-3 lg:w-auto lg:max-w-none">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-slate-50/70 px-4 py-3"
                >
                  <dt className="text-xs text-muted">{item.label}</dt>
                  <dd className="mt-0.5 text-sm font-bold tracking-tight text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </header>

      <main>
        <Container className="py-10 sm:py-12">
          <nav aria-labelledby="index-title">
            <div className="flex items-center justify-between gap-3">
              <h2
                id="index-title"
                className="text-sm font-semibold tracking-wider text-muted uppercase"
              >
                Índice
              </h2>
              <span className="text-xs text-muted">
                {exercises.length} seções
              </span>
            </div>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {exercises.map((exercise) => (
                <li key={exercise.id}>
                  <a
                    href={`#${exercise.id}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-2.5 text-sm transition hover:border-primary/30 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <span className="text-xs font-bold text-muted transition group-hover:text-primary">
                      {exercise.number}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-medium text-foreground">
                      {exercise.title}
                    </span>
                    <Icon
                      name="arrowUpRight"
                      className="size-3.5 shrink-0 text-slate-300 transition group-hover:text-primary"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-14 space-y-14 sm:space-y-20">
            {exercises.map((exercise) => {
              const Demo = demos[exercise.id]

              return (
                <ExerciseSection key={exercise.id} {...exercise}>
                  <Demo />
                </ExerciseSection>
              )
            })}
          </div>
        </Container>
      </main>

      <footer className="border-t border-border bg-surface">
        <Container className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Projeto acadêmico · React + JavaScript + Tailwind CSS
          </p>
          <a
            href="#top"
            className="inline-flex w-fit items-center gap-1.5 rounded-lg text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Voltar ao topo
            <Icon name="arrowUpRight" className="size-3.5 rotate-[-45deg]" />
          </a>
        </Container>
      </footer>
    </div>
  )
}

export default App
