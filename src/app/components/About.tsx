export default function About() {
  return (
    <section id="about" className="h-screen w-full items-center justify-center flex text-white">
      <div className="container mx-0 sm:mx-auto flex flex-col sm:flex-row bg-zinc-700 px-5 py-10 items-center rounded-none sm:rounded-xl">
        <img
          className="h-full w-xs sm:w-2/5"
          src="/assets/Developer activity-bro.png"
        />
        <div className="flex flex-col justify-center px-10 gap-4">
            <h2 className="font-bold text-2xl mb-3">Senior Developer | Full Stack Web Developer</h2>
            <p className="text-md sm:text-lg text-justify leading-8">
              Hi, I'm a passionate Full Stack Web Developer with over 5 years of experience Developing web applications using Vuejs, React Typescript, Nodejs, Laravel, and other modern web technologies. I specialize in building clean, efficient, and scalable solutions that solve real-world problems through intuitive design and thoughtful code.
            </p>
            <p className="text-md sm:text-lg leading-8">
              I'm currently seeking opportunities to grow as a developer, contribute to meaningful projects, and collaborate with forward-thinking teams that value innovation, creativity, and continuous learning.
            </p>
        </div>
      </div>
    </section>
  )
}