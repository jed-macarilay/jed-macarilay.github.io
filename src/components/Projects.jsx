import { useState } from 'react'
import { projects } from '../data'

const statusColors = {
  'In Production': 'bg-green-50 text-green-700 border-green-200',
  'Delivered': 'bg-blue-50 text-blue-700 border-blue-200',
  'Open Source': 'bg-amber-50 text-amber-700 border-amber-200',
}

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-2xl font-light"
        >
          ✕
        </button>

        {/* Main image */}
        <img
          src={images[current]}
          alt="Project screenshot"
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all"
            >
              ›
            </button>
          </>
        )}

        {/* Dots + counter */}
        <div className="flex items-center justify-center gap-3 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
          <span className="text-white/50 text-xs ml-2">{current + 1} / {images.length}</span>
        </div>
      </div>
    </div>
  )
}

function ImageGallery({ images }) {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <div className="relative w-full rounded-xl overflow-hidden bg-subtle mb-4 group cursor-zoom-in" style={{ aspectRatio: '16/9' }}
        onClick={() => setLightboxOpen(true)}
      >
        <img
          src={images[current]}
          alt="Project screenshot"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {/* Zoom hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
            Click to zoom
          </span>
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); setCurrent(i => (i - 1 + images.length) % images.length) }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-ink w-7 h-7 rounded-full flex items-center justify-center text-xs shadow transition-all opacity-0 group-hover:opacity-100"
            >‹</button>
            <button
              onClick={e => { e.stopPropagation(); setCurrent(i => (i + 1) % images.length) }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-ink w-7 h-7 rounded-full flex items-center justify-center text-xs shadow transition-all opacity-0 group-hover:opacity-100"
            >›</button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setCurrent(i) }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox images={images} startIndex={current} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-subtle bg-white">
      <div className="max-w-5xl mx-auto">
        <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">04 / Projects</span>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">Selected work</h2>
          <p className="font-body text-sm text-muted max-w-sm">Professional projects from 8 years of industry work. Code is proprietary — descriptions reflect my role and contributions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div key={i} className="border border-subtle rounded-2xl overflow-hidden flex flex-col hover:border-accent/50 transition-colors bg-paper">
              {project.images && (
                <div className="px-4 pt-4">
                  <ImageGallery images={project.images} />
                </div>
              )}
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <span className={`font-body text-xs border px-2.5 py-0.5 rounded-full ${statusColors[project.status] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>{project.status}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-base text-ink mb-1">{project.title}</h3>
                  <p className="font-mono text-xs text-accent mb-2">{project.company}</p>
                  <p className="font-body text-sm text-muted leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs bg-white border border-subtle text-muted px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                {project.link
                  ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-accent hover:underline font-medium">
                      {project.link.includes('gcash') ? 'Open in GCash →' : 'View live →'}
                    </a>
                  : <span className="font-body text-xs text-muted/60">Proprietary / NDA</span>
                }
              </div>
            </div>
          ))}
          <div className="border border-dashed border-subtle rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 bg-paper/50">
            <span className="font-display text-3xl text-subtle">+</span>
            <p className="font-body text-sm text-muted">Personal projects coming soon</p>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-accent hover:underline">Check my GitHub →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
