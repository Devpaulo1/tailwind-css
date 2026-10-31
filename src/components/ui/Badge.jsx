const variants = {
  neutral: 'bg-slate-100 text-slate-700 ring-slate-200',
  primary: 'bg-primary/10 text-blue-700 ring-primary/20',
  success: 'bg-success/10 text-green-800 ring-success/20',
  warning: 'bg-warning/15 text-amber-800 ring-warning/30',
  danger: 'bg-danger/10 text-red-700 ring-danger/20',
  accent: 'bg-accent/10 text-accent ring-accent/20',
}

function Badge({ variant = 'neutral', dot = false, className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${variants[variant]} ${className}`}
    >
      {dot ? (
        <span
          className="size-1.5 rounded-full bg-current"
          aria-hidden="true"
        />
      ) : null}
      {children}
    </span>
  )
}

export default Badge
