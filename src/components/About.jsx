export default function About() {
  const strengths = [
    { label: 'Vue.js and Laravel', sub: 'Core expertise' },
    { label: 'React and TypeScript', sub: 'Current focus' },
    { label: 'Azure and AWS', sub: 'Cloud platforms' },
    { label: 'Cum Laude', sub: 'BS Information Technology' },
  ]

  return (
    <section id="about" className="py-24 px-6 border-t border-subtle/80">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">01 / About</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-ink leading-tight">
              Building products
              <br />
              with <span className="text-accent italic">business impact</span>
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {strengths.map(({ label, sub }) => (
                <div key={label} className="bg-white border border-subtle rounded-2xl p-4 hover:-translate-y-0.5 transition-transform">
                  <p className="font-display font-600 text-sm text-ink">{label}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 font-body text-base text-ink leading-relaxed">
            <p>
              I am a Full-Stack Developer based in the Philippines with <strong className="font-500">8 years of experience</strong> shipping scalable web apps across fintech, banking, industrial automation, and branding.
            </p>
            <p>
              My core stack is <strong className="font-500">Vue.js and Laravel</strong>, with hands-on production work in React, TypeScript, Node.js, and cloud platforms.
            </p>
            <p>
              At <strong className="font-500">CognitiveAI</strong>, I build features for GCash platform integrations and maintain CMS platforms for client brands with strong delivery ownership.
            </p>
            <p>
              I also deploy on <strong className="font-500">AWS and Azure</strong>, manage CI/CD using GitHub Actions, and work comfortably across SQL and NoSQL stacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
