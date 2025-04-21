import type { Route } from "./+types/home";
import Intro from "../components/Intro"
import About from "../components/About"
import Experience  from "../components/Experience"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jedmark Macarilay" },
    { name: "description", content: "Welcome to my Portfolio!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Experience />
    </main>
  );
}
