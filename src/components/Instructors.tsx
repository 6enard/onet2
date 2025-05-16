import React from 'react';

export const Instructors: React.FC = () => {
  const instructors = [
    {
      name: 'Professor Alex Silva',
      position: 'Head Coach & Founder',
      bio: 'Black belt under the legendary Rickson Gracie with over 20 years of experience in Brazilian Jiu-Jitsu. Multiple-time world champion and dedicated instructor focused on technical precision and fundamentals.',
      image: 'https://images.pexels.com/photos/6295897/pexels-photo-6295897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      accolades: ['3x IBJJF World Champion', 'ADCC Medalist', 'Pan American Champion']
    },
    {
      name: 'Coach Sarah Johnson',
      position: 'Competition Team Lead',
      bio: 'Brown belt with a strong competition background in both gi and no-gi. Known for her dynamic guard game and innovative techniques. Specializes in preparing athletes for high-level competition.',
      image: 'https://images.pexels.com/photos/7045454/pexels-photo-7045454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      accolades: ['IBJJF European Champion', 'ADCC Trials Finalist', 'Pan American Medalist']
    },
    {
      name: 'Coach Michael Rodriguez',
      position: 'Kids Program Director',
      bio: 'Black belt with a background in education. Passionate about developing children\'s physical and mental skills through BJJ. Creates a fun, engaging environment while teaching discipline and respect.',
      image: 'https://images.pexels.com/photos/4757976/pexels-photo-4757976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      accolades: ['Child Development Certified', '10+ Years Teaching Experience', 'Youth Program Specialist']
    },
    {
      name: 'Coach Aisha Williams',
      position: 'Fundamentals Instructor',
      bio: 'Purple belt who excels at breaking down complex techniques into digestible components for beginners. Patient, detail-oriented, and committed to helping new students build a solid foundation.',
      image: 'https://images.pexels.com/photos/7045566/pexels-photo-7045566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      accolades: ['Women\'s Program Leader', 'Fundamentals Specialist', 'Injury Prevention Certified']
    }
  ];

  return (
    <section id="instructors" className="section bg-white">
      <div className="container">
        <h2 className="section-title slide-up">Our Instructors</h2>
        <p className="section-subtitle slide-up">
          Learn from our world-class team of instructors with decades of combined experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {instructors.map((instructor, index) => (
            <div 
              key={instructor.name} 
              className="card h-full flex flex-col slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                <p className="text-blue-700 font-medium text-sm mb-4">{instructor.position}</p>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{instructor.bio}</p>
                <div className="mt-auto">
                  <h4 className="text-sm font-bold mb-2 text-slate-800">Accolades:</h4>
                  <ul className="space-y-1">
                    {instructor.accolades.map((accolade, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start">
                        <span className="inline-block h-4 w-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-2 font-bold text-[10px] mt-0.5">✓</span>
                        {accolade}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};