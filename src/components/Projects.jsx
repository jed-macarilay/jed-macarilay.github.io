import { projects } from '../data'

const statusColors = {
  'In Production': 'bg-green-50 text-green-700 border-green-200',
  'Delivered': 'bg-blue-50 text-blue-700 border-blue-200',
  'Open Source': 'bg-amber-50 text-amber-700 border-amber-200',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-subtle bg-white">
      <div className="max-w-5xl mx-auto">
        <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
          04 / Projects
        </span>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-700 text-ink leading-tight">
            Selected work
          </h2>
          <p className="font-body text-sm text-muted max-w-sm">
            Most of my production work is under NDA. More personal projects coming soon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="border border-subtle rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/50 transition-colors bg-paper"
            >
              {/* Number + status */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                <span className={`font-body text-xs border px-2.5 py-0.5 rounded-full ${statusColors[project.status] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                  {project.status}
                </span>
              </div>

              {/* Title + description */}
              <div className="flex-1">
                <h3 className="font-display font-600 text-base text-ink mb-2">{project.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{project.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-xs bg-white border border-subtle text-muted px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-accent hover:underline mt-auto"
                >
                  View project →
                </a>
              ) : (
                <span className="font-body text-xs text-muted/60 mt-auto">Private / NDA</span>
              )}
            </div>
          ))}

          {/* Add project CTA card */}
          <div className="border border-dashed border-subtle rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 bg-paper/50">
            <span className="font-display text-3xl text-subtle">+</span>
            <p className="font-body text-sm text-muted">More projects coming soon</p>
            <a
              href="https://github.com/jedmark"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-accent hover:underline"
            >
              Check my GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
