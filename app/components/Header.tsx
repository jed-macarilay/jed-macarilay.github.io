import { Link } from "react-router"

export default function Header() {
  return (
    <header className="flex space-x-6 border-b border-zinc-700 pb-2">
      <Link to="/" className="text-sm font-medium text-zinc-400">Resume</Link>
      <Link to="/portfolio" className="text-sm font-medium text-zinc-400">Portfolio</Link>
      <Link to="/about" className="text-sm font-medium text-zinc-400">About</Link>
    </header>
  );
}