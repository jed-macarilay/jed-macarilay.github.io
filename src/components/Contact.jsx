import { personal } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-ink leading-tight mb-6">
              Let's build<br />
              something<br />
              <span className="text-accent italic">together</span>
            </h2>
            <p className="font-body text-base text-muted leading-relaxed">
              I'm currently open to full-time roles, freelance projects, and collaboration. Feel free to reach out
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center justify-between w-full border border-subtle rounded-2xl px-6 py-4 hover:border-accent hover:bg-white transition-all group"
            >
              <div>
                <p className="font-body text-xs text-muted mb-0.5">Email</p>
                <p className="font-body text-sm text-ink">{personal.email}</p>
              </div>
              <span className="text-muted group-hover:text-accent transition-colors">→</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full border border-subtle rounded-2xl px-6 py-4 hover:border-accent hover:bg-white transition-all group"
            >
              <div>
                <p className="font-body text-xs text-muted mb-0.5">LinkedIn</p>
                <p className="font-body text-sm text-ink">jedmark-macarilay</p>
              </div>
              <span className="text-muted group-hover:text-accent transition-colors">→</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full border border-subtle rounded-2xl px-6 py-4 hover:border-accent hover:bg-white transition-all group"
            >
              <div>
                <p className="font-body text-xs text-muted mb-0.5">GitHub</p>
                <p className="font-body text-sm text-ink">github.com/jedmark</p>
              </div>
              <span className="text-muted group-hover:text-accent transition-colors">→</span>
            </a>

            <div className="flex items-center justify-between w-full border border-subtle rounded-2xl px-6 py-4">
              <div>
                <p className="font-body text-xs text-muted mb-0.5">Phone</p>
                <p className="font-body text-sm text-ink">{personal.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
