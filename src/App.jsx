import Navbar from "./Components/Navbar/Navbar";

import "./styles/reset.scss";
import "./styles/global.scss";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About/>
    </>
  );
}

export default App;
