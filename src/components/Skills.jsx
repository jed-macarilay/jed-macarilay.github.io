import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-subtle bg-white">
      <div className="max-w-5xl mx-auto">
        <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
          02 / Skills
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-700 text-ink mb-16 leading-tight">
          Tech I work with
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map(({ category, items }) => (
            <div key={category} className="border border-subtle rounded-2xl p-6">
              <h3 className="font-display font-600 text-sm text-accent tracking-wide uppercase mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span
                    key={item}
                    className="font-body text-sm bg-paper border border-subtle text-ink px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
