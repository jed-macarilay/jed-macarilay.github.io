
import { Mail, Phone, Github, Gitlab, Linkedin } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="bg-zinc-800 rounded-2xl p-4 col-span-1 md:py-14">
      <div className="flex flex-col items-center text-center">
        <img
          src="/assets/profile.jpg"
          alt="Resume Photo"
          className="rounded-full mb-5 size-24"
        />
        <h1 className="text-xl font-bold">Jedmark Macarilay</h1>
        <p className="text-sm text-zinc-400">Full Stack Developer</p>
        <p className="text-sm text-zinc-400">Software Developer</p>
        <p className="text-sm text-zinc-400">Senior Developer</p>
      </div>
      <div className="mt-6 space-y-2 text-sm">
        <p className="flex items-center gap-2"><Mail size={16} /> jed.macarilay@gmail.com</p>
        <p className="flex items-center gap-2"><Phone size={16} /> 09507475414</p>
        <a href="https://github.com/jed-macarilay" className="flex items-center gap-2"><Github size={16} target="_blank" /> https://github.com/jed-macarilay</a>
        <a href="https://gitlab.com/jed.macarilay" className="flex items-center gap-2"><Gitlab size={16} target="_blank" /> https://gitlab.com/jed.macarilay</a>
        <a href="https://www.linkedin.com/in/jedmark-macarilay-b75632236/" className="flex items-start gap-2"><Linkedin size={16} target="_blank" /> https://www.linkedin.com/in/jedmark-macarilay-b75632236/</a>
      </div>
    </aside>
  );
}