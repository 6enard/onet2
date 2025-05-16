import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
      );
    };

    window.addEventListener('scroll', handleAnimations);
    window.addEventListener('resize', handleAnimations);
    
    // Initial check
    setTimeout(handleAnimations, 100);
    
    return () => {
      window.removeEventListener('scroll', handleAnimations);
      window.removeEventListener('resize', handleAnimations);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-blue-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/8174519/pexels-photo-8174519.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Brazilian Jiu-Jitsu training" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      <div className="container relative z-10 mt-24 md:mt-0">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm slide-up">
            WELCOME TO ONE TRIBE BJJ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 slide-up">
            Transform Your Life Through <span className="text-red-500">Brazilian Jiu-Jitsu</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 slide-up">
            Join our academy and discover the physical, mental, and spiritual benefits of BJJ in a supportive community environment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 scale-in">
            <a href="#programs" className="btn btn-primary">
              Explore Programs
            </a>
            <a href="#schedule" className="btn btn-secondary">
              View Schedule
            </a>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
            <a 
              href="#programs" 
              className="flex flex-col items-center text-white hover:text-blue-200 transition-colors"
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