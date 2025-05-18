import { NavLink } from "react-router"

export default function Header() {
  return (
    <header className="flex space-x-6 border-b border-zinc-700 pb-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-sm font-medium ${isActive ? "text-sm font-medium text-yellow-400 border-b-2 border-yellow-400" : "text-white"}`
        }>Resume</NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-sm font-medium ${isActive ? "text-sm font-medium text-yellow-400 border-b-2 border-yellow-400" : "text-white"}`
        }>About</NavLink>
    </header>
  );
}