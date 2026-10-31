import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Icon from '../ui/Icon'

const benefits = [
  'Acompanhe pedidos em tempo real',
  'Relatórios prontos para apresentar',
  'Suporte humano em até 2 horas',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}

  if (!values.email.trim()) {
    errors.email = 'Informe seu e-mail.'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Use um e-mail válido, como nome@empresa.com.'
  }

  if (!values.password) {
    errors.password = 'Informe sua senha.'
  } else if (values.password.length < 6) {
    errors.password = 'A senha precisa ter pelo menos 6 caracteres.'
  }

  return errors
}

function inputClasses(hasError) {
  const border = hasError
    ? 'border-danger focus:border-danger focus:ring-danger/20'
    : 'border-border focus:border-primary focus:ring-primary/20'

  return `w-full rounded-xl border bg-surface px-4 py-2.5 text-sm text-foreground transition placeholder:text-slate-400 focus:outline-none focus:ring-2 ${border}`
}

function LoginForm() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setStatus('idle')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 700)
  }

  const isLoading = status === 'loading'

  return (
    <Card className="mx-auto grid w-full max-w-4xl overflow-hidden lg:grid-cols-2">
      <div className="hidden flex-col justify-between gap-10 bg-linear-to-br from-primary to-accent p-8 text-white lg:flex">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-white/15">
            <Icon name="zap" className="size-5" />
          </span>
          <span className="text-base font-bold tracking-tight">Nimbus</span>
        </div>

        <div>
          <p className="text-sm font-semibold text-white/80">
            Área do cliente
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-balance">
            Tudo o que seu time precisa em um só lugar.
          </h3>
          <ul className="mt-6 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm">
                <Icon
                  name="checkCircle"
                  className="mt-0.5 size-4 shrink-0 text-white/90"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-white/70">
          Segurança de nível empresarial · SSO disponível
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight">Entrar na conta</h3>
        <p className="mt-1 text-sm text-muted">
          Use seu e-mail corporativo para continuar.
        </p>

        {status === 'success' ? (
          <div
            role="status"
            className="mt-5 flex items-start gap-2 rounded-xl border border-success/20 bg-success/10 p-3 text-sm text-green-800"
          >
            <Icon name="checkCircle" className="mt-0.5 size-4 shrink-0" />
            <p>
              <span className="font-semibold">Tudo certo!</span> Login validado
              para {values.email}.
            </p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="login-email"
              className="block text-sm font-medium text-slate-700"
            >
              E-mail
            </label>
            <div className="relative mt-1.5">
              <Icon
                name="mail"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400"
              />
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="nome@empresa.com"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'login-email-error' : undefined}
                className={`${inputClasses(Boolean(errors.email))} pl-10`}
              />
            </div>
            {errors.email ? (
              <p
                id="login-email-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1 text-xs font-medium text-danger"
              >
                <Icon name="alertCircle" className="size-3.5 shrink-0" />
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <div className="flex items-center justify-between gap-3">
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-slate-700"
              >
                Senha
              </label>
              <a
                href="#login-form"
                className="rounded text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Esqueci minha senha
              </a>
            </div>
            <div className="relative mt-1.5">
              <Icon
                name="lock"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400"
              />
              <input
                id="login-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Mínimo de 6 caracteres"
                value={values.password}
                onChange={handleChange}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={
                  errors.password ? 'login-password-error' : undefined
                }
                className={`${inputClasses(Boolean(errors.password))} pr-12 pl-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                aria-pressed={showPassword}
                className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon
                  name={showPassword ? 'eyeOff' : 'eye'}
                  className="size-4"
                />
              </button>
            </div>
            {errors.password ? (
              <p
                id="login-password-error"
                role="alert"
                className="mt-1.5 flex items-center gap-1 text-xs font-medium text-danger"
              >
                <Icon name="alertCircle" className="size-3.5 shrink-0" />
                {errors.password}
              </p>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            <input
              id="login-remember"
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
              className="size-4 rounded border-border accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
            <label htmlFor="login-remember" className="text-sm text-slate-600">
              Manter conectado por 30 dias
            </label>
          </div>

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
            {isLoading ? null : <Icon name="arrowRight" className="size-4" />}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Não tem conta?{' '}
          <a
            href="#login-form"
            className="rounded font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Criar conta gratuita
          </a>
        </p>
      </div>
    </Card>
  )
}

export default LoginForm
