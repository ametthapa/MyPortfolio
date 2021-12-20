import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Error from "./components/Error";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="m-auto lg:max-w-6xl md:max-w-3xl sm:max-w-xl">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
