import Badge from '../ui/Badge'

function SectionHeading({ id, number, title, description, concepts = [] }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-start gap-4">
        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-blue-700 ring-1 ring-primary/20 ring-inset">
          {number}
        </span>
        <div className="min-w-0">
          <h2
            id={id}
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            {title}
          </h2>
          <p className="mt-1 max-w-xl text-sm leading-6 text-muted">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 sm:max-w-56 sm:justify-end">
        {concepts.map((concept) => (
          <Badge key={concept} variant="neutral">
            {concept}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default SectionHeading
