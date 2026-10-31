import SectionHeading from './SectionHeading'

function ExerciseSection({ id, number, title, description, concepts, children }) {
  const headingId = `${id}-title`

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-8">
      <SectionHeading
        id={headingId}
        number={number}
        title={title}
        description={description}
        concepts={concepts}
      />

      <div className="mt-5 rounded-3xl border border-slate-200 bg-white/60 p-4 sm:p-6 lg:p-8">
        {children}
      </div>
    </section>
  )
}

export default ExerciseSection
