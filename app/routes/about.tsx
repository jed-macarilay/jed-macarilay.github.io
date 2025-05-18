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
          Full-Stack Developer with 6 years of experience building scalable web applications across frontend and backend. Expert in Vue.js and Laravel, with production experience in React, Node.js, and TypeScript over the past year. Adept at delivering clean, maintainable code, integrating REST APIs, and deploying via cloud platforms like Azure and AWS. I’m passionate about learning new stacks and adapting quickly to evolving tech environments.
        </p>
      </div>
    </section>
  );
}