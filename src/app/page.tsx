import Image from "next/image";
import Header from "./component/Header";
import Home from "./section/Home";
import AboutMe from "./section/AboutMe";
import TechStack from "./section/TechStack";
import Project from "./section/Project";
import Contact from "./section/Contact";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Home />
      <AboutMe />
      <TechStack />
      <Project />
      <Contact />
    </main>
  );
}
