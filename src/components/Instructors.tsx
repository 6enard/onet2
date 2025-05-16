import React from 'react';
import instructor1 from './tete.jpeg';
import instructor2 from './seraphin.jpeg';
import instructor3 from './george.jpg';
import instructor4 from './norman1.jpeg';

export const Instructors: React.FC = () => {
  const instructors = [
    {
      name: 'Tete',
      position: 'Founder - One Tribe',
      bio: 'With over 15 years in martial arts, Tete specializes in Brazilian Jiu-Jitsu and Mixed Martial Arts.',
      image: instructor1,
      accolades: ['Brazilian Jiu-Jitsu', 'Mixed Martial Arts']
    },
    {
      name: 'Seraphin',
      position: 'Head Instructor',
      bio: 'Seraphin is a dedicated Brazilian Jiu-Jitsu coach with a deep understanding of grappling techniques and a passion for student development.',
      image: instructor2,
      accolades: ['Brazilian Jiu-Jitsu', 'Grappling']
    },
    {
      name: 'George',
      position: 'Striking and Grappling Coach',
      bio: 'George is a skilled striking coach with a background in Kickboxing.',
      image: instructor3,
      accolades: ['Striking (Kickboxing, Muay Thai)', 'Grappling (BJJ, Wrestling)']
    },
    {
      name: 'Norman',
      position: 'Assistant Striking & Grappling Coach',
      bio: 'Norman is a skilled striking coach with a background in Kickboxing.',
      image: instructor4,
      accolades: ['Striking (Kickboxing, Muay Thai)', 'Grappling (BJJ, Wrestling)']
    }
  ];

  return (
    <section id="instructors" className="section bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-4 slide-up">Our Instructors</h2>
        <p className="text-center text-green-700 mb-12 slide-up">
          Meet the passionate team building the next generation of martial artists in Kenya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.name}
              className="card h-full flex flex-col shadow-lg border-t-8 rounded-lg"
              style={{
                animationDelay: `${index * 100}ms`,
                borderTopColor: ['black', 'red', 'green', 'black'][index % 4]
              }}
            >
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="text-xl font-bold mb-1 text-black">{instructor.name}</h3>
                <p className="text-red-600 font-medium text-sm mb-4">{instructor.position}</p>
                <p className="text-gray-700 text-sm mb-4 flex-grow">{instructor.bio}</p>
                <div className="mt-auto">
                  <h4 className="text-sm font-bold mb-2 text-green-700">Expertise:</h4>
                  <ul className="space-y-1">
                    {instructor.accolades.map((accolade, i) => (
                      <li key={i} className="text-xs text-gray-700 flex items-start">
                        <span className="inline-block h-4 w-4 rounded-full bg-green-200 text-black flex items-center justify-center mr-2 font-bold text-[10px] mt-0.5">✓</span>
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
