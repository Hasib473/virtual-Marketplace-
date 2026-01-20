// ModernHero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sliderimg from "../assets/firstimg.png"
import slider2img from "../assets/freelanceimg.png"
import slider3img from "../assets/frrimg.png"

const slides = [
  {
    id: 1,
    title: "Grow Your Skills, Unlock Opportunities",
    subtitle: "Connect, collaborate, and achieve more with our platform.",
    image: sliderimg
  },
  {
    id: 2,
    title: "Work Together in Real-Time",
    subtitle: "Seamless collaboration across teams, anytime, anywhere.",
    image: slider2img,
  },
  {
    id: 3,
    title: "Boost Your Career to the Next Level",
    subtitle: "Track your progress, find opportunities, and grow.",
    image: slider3img,
  },
];

const ModernHero = () => {
  const [current, setCurrent] = useState(0);

  // Slider auto-change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6) contrast(1.1)",
          }}
        ></div>
      ))}

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-6 z-20">
        <motion.h1
          key={current}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          {slides[current].title}
        </motion.h1>
        <motion.p
          key={current + "subtitle"}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md"
        >
          {slides[current].subtitle}
        </motion.p>
        <motion.div
          key={current + "buttons"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-sm font-semibold shadow-lg transition-all duration-300">
            Hire a Freelancer
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-sm font-semibold shadow-lg transition-all duration-300">
            Earn Money Freelancing
          </button>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-1 h-10 border-2 border-white rounded-full animate-bounce"></div>
      </div>
    </section>
  );
};

export default ModernHero;
