import Navbar from "./Components/Navbar/Navbar";

import "./styles/reset.scss";
import "./styles/global.scss";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  );
}

export default App;
