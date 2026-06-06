import Navbar from "./Components/Navbar/Navbar";

import "./styles/reset.scss";
import "./styles/global.scss";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Stacks from "./Components/Stacks/Stacks";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About/>
      <Stacks />
      <Contact />
    </>
  );
}

export default App;
