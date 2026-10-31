const sizes = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-14 text-base',
  xl: 'size-20 text-2xl',
}

const statusColors = {
  online: 'bg-success',
  away: 'bg-warning',
  offline: 'bg-slate-400',
}

function Avatar({
  src,
  alt = '',
  initials = '',
  size = 'md',
  status,
  ring = false,
  className = '',
}) {
  const ringClasses = ring ? 'ring-4 ring-surface' : ''

  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${sizes[size]} rounded-full object-cover ${ringClasses}`}
        />
      ) : (
        <span
          role="img"
          aria-label={alt || undefined}
          aria-hidden={alt ? undefined : true}
          className={`grid place-items-center rounded-full bg-linear-to-br from-primary to-accent font-bold text-white ${sizes[size]} ${ringClasses}`}
        >
          {initials}
        </span>
      )}

      {status ? (
        <>
          <span
            className={`absolute -right-0.5 -bottom-0.5 size-3 rounded-full ring-2 ring-surface ${statusColors[status]}`}
            aria-hidden="true"
          />
          <span className="sr-only">
            {status === 'online'
              ? 'Online'
              : status === 'away'
                ? 'Ausente'
                : 'Offline'}
          </span>
        </>
      ) : null}
    </span>
  )
}

export default Avatar
