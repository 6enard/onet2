import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import bgImage from './hero.jpeg'; // Local image

export const Hero: React.FC = () => {
  useEffect(() => {
    const handleAnimations = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
      elements.forEach(element => {
        if (isElementInViewport(element)) {
          element.classList.add('appear');
        }
      });
    };

    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85;
    };

    window.addEventListener('scroll', handleAnimations);
    window.addEventListener('resize', handleAnimations);
    setTimeout(handleAnimations, 100);

    return () => {
      window.removeEventListener('scroll', handleAnimations);
      window.removeEventListener('resize', handleAnimations);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred & darkened background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Brazilian Jiu-Jitsu training"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mt-24 md:mt-0 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm slide-up">
            WELCOME TO ONE TRIBE BJJ
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 slide-up text-white drop-shadow-lg">
            Join the <span className="text-red-600">One Tribe</span> Family
          </h1>

          {/* Typewriter effect */}
          <div className="text-lg md:text-xl text-white drop-shadow-md mb-6 slide-up">
            <Typewriter
              options={{
                strings: [
                  'Where warriors train and community thrives.',
                  'Strength. Discipline. Brotherhood.',
                  'Train BJJ. Live Better.'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25
              }}
            />
          </div>

          <p className="text-white/90 text-base md:text-lg mb-8 slide-up">
            Located in the heart of Nairobi, our gym welcomes everyone from beginners to seasoned competitors. With a growing community, we offer an affordable path to mastering Brazilian Jiu-Jitsu.
          </p>

          {/* Only Two Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 scale-in">
            <a
              href="#programs"
              className="px-6 py-3 rounded-full font-semibold bg-red-600 text-white hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
              Explore Programs
            </a>
            <a
              href="#schedule"
              className="px-6 py-3 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-black transition duration-300 transform hover:scale-105"
            >
              View Schedule
            </a>
          </div>

          {/* Scroll down arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
            <a
              href="#programs"
              className="flex flex-col items-center text-white hover:text-green-300 transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Discover More</span>
              <ArrowRight className="animate-bounce" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
