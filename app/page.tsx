import Hero from "./components/Hero";
import About from "./components/About";
import Picture from "./components/Pictures";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Picture />
      <Videos />
      <Contact />
    </div>
  );
}
