export default function About() {
  return (
    <section className="bg-zinc-800 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <img
          src="/assets/Developer activity-bro.png"
          alt="Developer illustration"
          className="rounded-xl w-full"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Senior Developer | Full Stack Web Developer</h2>
        <p className="text-sm text-zinc-300 mb-4">
          Hi, I'm a passionate Full Stack Web Developer with over 5 years of experience developing web applications
          using Vue.js, React, TypeScript, Node.js, Laravel, and other modern web technologies. I specialize in building
          clean, efficient, and scalable solutions that solve real-world problems through intuitive design and thoughtful code.
        </p>
        <p className="text-sm text-zinc-300">
          I'm currently seeking opportunities to grow as a developer, contribute to meaningful projects, and collaborate with
          forward-thinking teams that value innovation, creativity, and continuous learning.
        </p>
      </div>
    </section>
  );
}