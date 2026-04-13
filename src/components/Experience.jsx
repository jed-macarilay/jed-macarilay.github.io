import { useState } from 'react'
import { experience } from '../data'

export default function Experience() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 border-t border-subtle">
      <div className="max-w-5xl mx-auto">
        <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
          03 / Experience
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-700 text-ink mb-16 leading-tight">
          Where I've worked
        </h2>

        <div className="space-y-3">
          {experience.map((job, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${expanded === i ? 'border-accent bg-white' : 'border-subtle hover:border-accent/40'}`}
              onClick={() => setExpanded(expanded === i ? -1 : i)}
            >
              {/* Header row */}
              <div className="p-5 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display font-600 text-base text-ink">{job.title}</h3>
                    {job.current && (
                      <span className="font-body text-xs bg-accent text-paper px-2.5 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="font-body text-sm text-muted">
                    {job.company} · {job.period}
                  </p>
                </div>
                <span className={`text-muted mt-0.5 transition-transform duration-300 text-lg ${expanded === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </div>

              {/* Expanded content */}
              {expanded === i && (
                <div className="px-5 pb-5 border-t border-subtle pt-4">
                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="font-body text-sm text-ink flex gap-2">
                        <span className="text-accent mt-1 shrink-0">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="font-mono text-xs bg-paper border border-subtle text-muted px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
