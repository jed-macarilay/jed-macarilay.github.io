export default function Header() {
  return (
    <header className="bg-zinc-900 sticky top-0 text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-3xl sm:text-md font-medium">Portfolio</span>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#about" className="text-lg font-semibold">About</a>
          <a href="#experience" className="text-lg font-semibold">Experience</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="mailto:jed.macarilay@gmail.com"
            className="px-5 py-1 rounded-full bg-zinc-400 text-white font-medium hover:bg-zinc-700 hover:text-sm"
          >Hire Me</a>
        </div>
      </nav>
    </header>
  )
}