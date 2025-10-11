import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Animation from "./components/Animation";

function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar />

      <Animation>
        <Home />
      </Animation>

      <Animation>
        <Education />
      </Animation>

      <Animation>
        <Projects />
      </Animation>

      <Animation>
        <Contact />
      </Animation>
    </div>
  );
}

export default App;
