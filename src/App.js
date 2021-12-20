import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="m-auto max-w-6xl">
      <Header />
      <Introduction />
      <About />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
