import { useState } from 'react'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { navbarLinks } from '../../data/navigation'

function ResponsiveNavbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Início')

  function selectLink(label) {
    setActive(label)
    setOpen(false)
  }

  function linkClasses(label, extra = '') {
    return `rounded-lg px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
      label === active
        ? 'bg-primary/10 font-semibold text-blue-700'
        : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-foreground'
    } ${extra}`
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#responsive-navbar"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-white">
            <Icon name="zap" className="size-5" />
          </span>
          <span className="text-base font-bold tracking-tight">Nimbus</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navbarLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => selectLink(link.label)}
                  aria-current={link.label === active ? 'page' : undefined}
                  className={linkClasses(link.label)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
          <Button size="sm">Criar conta</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="navbar-mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="grid size-9 place-items-center rounded-lg border border-border text-slate-600 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
        >
          <Icon name={open ? 'x' : 'menu'} className="size-5" />
        </button>
      </header>

      <div
        id="navbar-mobile-menu"
        hidden={!open}
        className="border-t border-border px-4 pt-2 pb-4 md:hidden"
      >
        <ul className="space-y-1">
          {navbarLinks.map((link) => (
            <li key={link.label}>
              <button
                type="button"
                onClick={() => selectLink(link.label)}
                aria-current={link.label === active ? 'page' : undefined}
                className={linkClasses(link.label, 'block w-full text-left')}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-3 grid gap-2">
          <Button variant="secondary" size="sm" fullWidth>
            Entrar
          </Button>
          <Button size="sm" fullWidth>
            Criar conta
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveNavbar
