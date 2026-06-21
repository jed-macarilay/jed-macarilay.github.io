import { highlights } from '../data'

export default function Highlights() {
  return (
    <section className="px-6 -mt-10 mb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-subtle bg-white p-4"
            >
              <p className="font-display text-xl md:text-2xl text-ink font-700">{item.value}</p>
              <p className="font-body text-xs text-muted mt-1 uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
