import { personal } from '../data'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-800 text-ink leading-none tracking-tight mb-6 animate-fade-up opacity-0-init animate-delay-100" style={{ animationFillMode: 'forwards' }}>
          Jedmark<br />
          <span className="text-accent">Macarilay</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10 animate-fade-up opacity-0-init animate-delay-200" style={{ animationFillMode: 'forwards' }}>
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 animate-fade-up opacity-0-init animate-delay-400" style={{ animationFillMode: 'forwards' }}>
          <a
            href="#projects"
            className="font-body font-500 text-sm bg-accent text-paper px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            View my work
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-500 text-sm border border-ink text-ink px-6 py-3 rounded-full hover:bg-ink hover:text-paper transition-all"
          >
            LinkedIn →
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex items-center gap-3 animate-fade-in opacity-0-init animate-delay-600" style={{ animationFillMode: 'forwards' }}>
          <div className="w-px h-12 bg-subtle" />
          <span className="font-body text-xs text-muted tracking-widest uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
