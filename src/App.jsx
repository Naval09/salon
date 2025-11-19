// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import { Gallery } from "./components/Gallery";
import { Team } from "./components/Team";
import TestimonialsSlider from "./components/Testimonials.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Team />
      <TestimonialsSlider />
      <Contact />
      <Footer />
    </div>
  );
}
