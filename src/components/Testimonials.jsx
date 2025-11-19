/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aarushi Malhotra",
    text: "Absolutely loved the service! The staff is super professional and the ambience is so calming. My go-to salon now!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Sanya Kapoor",
    text: "Got my hair color done and it's PERFECT! They knew exactly what would suit my skin tone. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Neha Sharma",
    text: "The facial treatment was heavenly. You can literally see the glow instantly. Best place for self-care days!",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="relative max-w-2xl mx-auto w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center text-center"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-24 h-24 rounded-full mb-6 shadow-lg object-cover"
            />

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              "{testimonials[index].text}"
            </p>

            <h4 className="text-xl font-semibold text-pink-600">
              {testimonials[index].name}
            </h4>
          </motion.div>
        </AnimatePresence>

        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:shadow-lg duration-200"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:shadow-lg duration-200"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-3">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-pink-600 w-5" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
