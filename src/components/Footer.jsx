export default function Footer() {
  return (
    <footer className="border-t border-subtle py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="font-body text-sm text-muted">
          (c) {new Date().getFullYear()} Jedmark Macarilay
        </p>
      </div>
    </footer>
  )
}
