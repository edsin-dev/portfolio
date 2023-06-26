import Header from "./component/Header";
import AboutMe from "./section/AboutMe";
import Contact from "./section/Contact";
import Home from "./section/Home";
import Project from "./section/Project";
import TechStack from "./section/TechStack";

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
