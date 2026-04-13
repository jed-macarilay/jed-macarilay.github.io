export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: label + heading */}
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
              01 / About
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-ink leading-tight">
              Building things<br />
              that <span className="text-accent italic">actually work</span>
            </h2>

            {/* Highlight cards */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Vue.js & Laravel', sub: 'Core expertise' },
                { label: 'React + TypeScript', sub: 'Current focus' },
                { label: 'Azure & AWS', sub: 'Cloud platforms' },
                { label: 'Cum Laude', sub: 'BS Inf. Technology' },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-white border border-subtle rounded-2xl p-4">
                  <p className="font-display font-600 text-sm text-ink">{label}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <div className="space-y-5 font-body text-base text-ink leading-relaxed">
            <p>
              I'm a Full-Stack Developer based in the Philippines with{' '}
              <strong className="font-500">8 years of experience</strong> shipping scalable web apps
              across fintech, banking, industrial automation, and branding industries.
            </p>
            <p>
              My core stack is <strong className="font-500">Vue.js and Laravel</strong>, backed by
              production experience in React, TypeScript, Node.js, and cloud platforms (AWS, Azure).
              Currently at <strong className="font-500">CognitiveAI</strong>, building Web Application
              features that run on the GCash platform as a third-party partner, and managing CMS
              platforms for branding clients.
            </p>
            <p>
              I've deployed and maintained applications on{' '}
              <strong className="font-500">Azure and AWS</strong> (S3, CloudFront), set up CI/CD pipelines
              with GitHub Actions, and worked with both SQL and NoSQL databases.
            </p>
            <p>
              I graduated <strong className="font-500">Cum Laude</strong> and won Best in Practicum — and
              I bring that same attention to craft to every codebase I touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
