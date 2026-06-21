import { personal } from '../data'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 px-6 overflow-hidden">
      <div className="absolute inset-0 hero-noise pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <span
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent border border-accent/25 rounded-md px-3 py-1.5 bg-white mb-6 animate-fade-in opacity-0-init animate-delay-100"
          style={{ animationFillMode: 'forwards' }}
        >
          Full-stack developer | Vue, Laravel, React, TypeScript
        </span>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-800 text-ink leading-[0.98] tracking-tight mb-6 max-w-4xl animate-fade-up opacity-0-init animate-delay-100" style={{ animationFillMode: 'forwards' }}>
          I build reliable product dashboards and full-stack web apps.
        </h1>

        <p className="font-body text-lg md:text-xl text-muted max-w-3xl leading-relaxed mb-10 animate-fade-up opacity-0-init animate-delay-200" style={{ animationFillMode: 'forwards' }}>
          {personal.tagline}
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-up opacity-0-init animate-delay-400" style={{ animationFillMode: 'forwards' }}>
          <a
            href="#projects"
            className="font-body font-500 text-sm bg-accent text-paper px-5 py-3 rounded-md hover:bg-accentDark transition-all"
          >
            View selected work
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-500 text-sm border border-ink/30 text-ink px-5 py-3 rounded-md hover:border-ink hover:bg-white transition-all"
          >
            LinkedIn -&gt;
          </a>
        </div>

        <div className="mt-16 max-w-2xl border-l border-subtle pl-4 animate-fade-in opacity-0-init animate-delay-600" style={{ animationFillMode: 'forwards' }}>
          <p className="font-body text-sm text-muted">
            Currently building GCash Miniprogram features, React dashboards, CMS workflows, and production-ready frontend deployments on AWS.
          </p>
        </div>
      </div>
    </section>
  )
}
