import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { personal, projects } from '../data'

const statusColors = {
  'Open Source': 'bg-amber-50 text-amber-700 border-amber-200',
  'Work Project': 'bg-green-50 text-green-700 border-green-200',
  'Private Repo': 'bg-slate-50 text-slate-700 border-slate-200',
}

const projectKindLabels = {
  'Work Project': 'Production Work',
  'Private Repo': 'Private Build',
  'Open Source': 'Public Project',
}

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const closeButtonRef = useRef(null)

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  useEffect(() => {
    closeButtonRef.current?.focus()
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-ink/95 flex items-center justify-center px-4 py-12 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project image lightbox"
    >
      <div className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-lg text-white/80 hover:bg-white/20 hover:text-white"
          aria-label="Close lightbox"
        >
          x
        </button>

        <img
          src={images[current]}
          alt="Project screenshot"
          className="max-h-[78vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="fixed left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-white/10 text-lg text-white transition-all hover:bg-white/20"
              aria-label="Previous image"
            >
              &lt;
            </button>
            <button
              onClick={next}
              className="fixed right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-white/10 text-lg text-white transition-all hover:bg-white/20"
              aria-label="Next image"
            >
              &gt;
            </button>
          </>
        )}

        <div className="fixed bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-center gap-3 rounded-md border border-white/10 bg-black/30 px-3 py-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white' : 'bg-white/30'}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
          <span className="text-white/50 text-xs ml-2">{current + 1} / {images.length}</span>
        </div>
      </div>
    </div>,
    document.body,
  )
}

function ImageGallery({ images }) {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <div className="relative mb-5 w-full overflow-hidden rounded-md border border-subtle bg-subtle group" style={{ aspectRatio: '16/9' }}>
        <button
          type="button"
          className="absolute inset-0 cursor-zoom-in text-left"
          onClick={() => setLightboxOpen(true)}
          aria-label="Open project screenshots"
        >
          <img
            src={images[current]}
            alt="Project screenshot"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-all bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
              Click to zoom
            </span>
          </span>
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); setCurrent(i => (i - 1 + images.length) % images.length) }}
              className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md border border-subtle bg-white/90 text-xs text-ink opacity-0 shadow transition-all hover:bg-white group-hover:opacity-100"
              aria-label="Previous screenshot"
            >
              &lt;
            </button>
            <button
              onClick={e => { e.stopPropagation(); setCurrent(i => (i + 1) % images.length) }}
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md border border-subtle bg-white/90 text-xs text-ink opacity-0 shadow transition-all hover:bg-white group-hover:opacity-100"
              aria-label="Next screenshot"
            >
              &gt;
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setCurrent(i) }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to screenshot ${i + 1}`}
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
        <div className="flex flex-wrap items-end justify-between gap-5 mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">Selected work</h2>
            <p className="font-body mt-4 text-sm text-muted max-w-xl">A short list of production work and private builds I can discuss at a safe level, focused on dashboard thinking, product flows, and responsive interface craft.</p>
          </div>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-accent hover:underline font-medium">GitHub profile -&gt;</a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
              <div
                key={project.id || project.title}
                className={`flex flex-col overflow-hidden rounded-lg border bg-white transition-colors hover:border-accent/70 ${project.status === 'Work Project' ? 'border-ink/15 md:col-span-2' : 'border-subtle'}`}
              >
                {project.images && (
                  <div className="px-4 pt-4 md:px-5 md:pt-5">
                    <ImageGallery images={project.images} />
                  </div>
                )}
                <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <span className="font-body text-xs border px-2.5 py-0.5 rounded-md bg-accent text-paper border-accent">
                        {projectKindLabels[project.status] || 'Project'}
                      </span>
                      <span className={`font-body text-xs border px-2.5 py-0.5 rounded-md ${statusColors[project.status] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>{project.status}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl text-ink mb-1">{project.title}</h3>
                    <p className="font-mono text-xs text-accent mb-2">{project.company}</p>
                    <p className="font-body text-sm text-muted leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-xs bg-white border border-subtle text-muted px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-accent hover:underline font-medium">
                      {project.linkLabel || 'View project'} -&gt;
                    </a>
                  ) : (
                    <span className="font-body text-xs text-muted/60">
                      {project.status === 'Private Repo' ? 'Private repository' : 'Summary only - private work'}
                    </span>
                  )}
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
