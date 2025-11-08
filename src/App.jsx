import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col font-body">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
