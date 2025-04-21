export default function Experience() {
  return (
    <section
      id="experience"
      className="text-amber-50"
    >
      <div className="container mx-auto p-10 flex flex-col gap-24">
        <h2 className="text-lg sm:text-3xl font-bold">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Experience Card */}
          <div className="flex flex-col px-5 sm:px-20 gap-4">
            <h1 className="text-3xl font-medium">Senior Developer - Business Application</h1>
            <p className="text-2xl">Diversified Robotics</p>
            <i className="font-light">January 2024 - April 2025</i>
            <div className="grid grid-cols-4 gap-1.5 items-center">
                <p className="relative bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm"><span>Vue.js</span></p>
                <p className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm"><span>React</span></p>
                <p className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm"><span>Node.js</span></p>
                <p className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm"><span>Laravel</span></p>
                <p className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm"><span>Azure</span></p>
                <p className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm"><span>Typescript</span></p>
            </div>
          </div>

          <div className="flex flex-col px-5 sm:px-20 gap-4">
            <h1 className="text-3xl font-medium">Full-Stack Developer</h1>
            <p className="text-2xl">Redmer Production, LLC</p>
            <i className="font-light">2023</i>
            <div className="grid grid-cols-4 gap-1.5 items-center">
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Vue.js</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Node.js</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Javscript</span>
            </div>
          </div>

          <div className="flex flex-col px-5 sm:px-20 gap-4">
            <h1 className="text-3xl font-medium">Vue.js Developer</h1>
            <p className="text-2xl">Questronix Corporation</p>
            <i className="font-light">2022 - 2023</i>
            <div className="grid grid-cols-4 gap-1.5 items-center">
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Vue.js</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Node.js</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">CodeIgniter</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">SQL</span>
            </div>
          </div>

          <div className="flex flex-col px-5 sm:px-20 gap-4">
            <h1 className="text-3xl font-medium">Full-Stack Web Developer</h1>
            <p className="text-2xl">Quiddity Usability Labs</p>
            <i className="font-light">July 2021 - December 2021</i>
            <div className="grid grid-cols-4 gap-1.5 items-center">
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Vue.js</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Laravel</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Drupal</span>
            </div>
          </div>

          <div className="flex flex-col px-5 sm:px-20 gap-4">
            <h1 className="text-3xl font-medium">Software Developer</h1>
            <p className="text-2xl">Mobext Philippines</p>
            <i className="font-light">May 2019 - December 2021</i>
            <div className="grid grid-cols-4 gap-1.5 items-center">
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Vue.js</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Laravel</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">CodeIgniter</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">MySQL</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Docker</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Javascript</span>
            </div>
          </div>

          <div className="flex flex-col px-5 sm:px-20 gap-4">
            <h1 className="text-3xl font-medium">Junior Web Developer</h1>
            <p className="text-2xl">JARVIS Butler Property Management Corporation</p>
            <i className="font-light">September 2018 - March 2019</i>
            <div className="grid grid-cols-4 gap-1.5 items-center">
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Vue.js</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Laravel</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">MySQL</span>
                <span className="bg-zinc-400 px-2 py-1 rounded-md font-medium text-xs sm:text-sm">Javascript</span>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}