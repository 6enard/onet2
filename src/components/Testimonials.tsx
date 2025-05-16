import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'David Chen',
      role: 'Blue Belt, Training for 2 years',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Joining One Tribe BJJ was one of the best decisions I\'ve made. The instructors are knowledgeable and patient, and the community is incredibly supportive. I\'ve seen tremendous growth both on and off the mats.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Purple Belt, Training for 4 years',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'The competition team at One Tribe BJJ has helped me reach new heights in my BJJ journey. The focused training, detailed feedback, and competition strategy have improved my game significantly.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Parent of Kids Program Student',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'My son has been in the kids program for a year now, and the transformation has been incredible. He\'s more confident, disciplined, and focused, both at home and in school. The coaches make learning fun while instilling important values.',
      rating: 5
    },
    {
      name: 'Sophia Williams',
      role: 'White Belt, Training for 6 months',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'As a complete beginner, I was nervous about starting BJJ, but the fundamentals program made the transition smooth and enjoyable. The step-by-step approach and supportive environment have made learning accessible and fun.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Brown Belt, Training for 7 years',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'I\'ve trained at several academies over the years, and One Tribe BJJ stands out for its technical instruction and positive culture. The advanced classes continue to challenge me and evolve my game even after years of training.',
      rating: 5
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);
  
  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="section bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/5"></div>
      </div>
      
      <div className="container relative z-10">
        <h2 className="section-title slide-up">What Our Students Say</h2>
        <p className="section-subtitle slide-up">
          Don't just take our word for it. Hear from the members of our One Tribe BJJ family.
        </p>
        
        <div className="mt-12 relative">
          <div className="scale-in">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 hidden md:block">
                  <img
                    className="h-96 w-full md:w-72 object-cover"
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    <p className="text-lg md:text-xl font-serif italic text-slate-700 mb-6">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="md:hidden mr-4">
                        <img
                          className="h-12 w-12 rounded-full object-cover"
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{testimonials[currentIndex].name}</h3>
                        <p className="text-sm text-slate-600">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-slate-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-slate-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};