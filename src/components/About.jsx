export default function About() {
  const strengths = [
    { label: 'MVP ownership', sub: 'Architecture to release' },
    { label: 'Vue/Laravel + React/TS', sub: 'Full-stack delivery' },
    { label: 'AWS and Azure', sub: 'Cloud deployment' },
    { label: 'Client-facing work', sub: 'Stakeholder communication' },
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
                <div key={label} className="bg-white border border-subtle rounded-lg p-4">
                  <p className="font-display font-600 text-sm text-ink">{label}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 font-body text-base text-ink leading-relaxed">
            <p>
              I am a Full-Stack Developer based in the Philippines with <strong className="font-500">8+ years of experience</strong> shipping web apps across fintech, banking, logistics, healthcare, and brand platforms.
            </p>
            <p>
              My core stack is <strong className="font-500">Vue.js and Laravel</strong>, backed by production work in React, TypeScript, Node.js, AWS, and Azure.
            </p>
            <p>
              At <strong className="font-500">CognitiveAI</strong>, I build GCash Miniprogram features, React dashboards, and CMS platforms for client brands with strong delivery ownership.
            </p>
            <p>
              Outside client work, I build public product demos like <strong className="font-500">Vet Clinic Care</strong> and <strong className="font-500">PawKeep</strong> to show real workflows, not just code samples.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
