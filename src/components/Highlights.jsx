import { highlights } from '../data'

export default function Highlights() {
  return (
    <section className="px-6 -mt-6 mb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-subtle/80 bg-white/80 backdrop-blur-sm p-4 shadow-[0_8px_20px_rgba(13,13,13,0.04)]"
            >
              <p className="font-display text-xl md:text-2xl text-ink">{item.value}</p>
              <p className="font-body text-xs text-muted mt-1 uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
