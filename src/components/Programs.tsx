import React from 'react';
import { Users, Award, Sword, Heart } from 'lucide-react';

export const Programs: React.FC = () => {
  const programs = [
    {
      title: 'Fundamentals',
      description: 'Perfect for beginners, our fundamentals program teaches the basic techniques, movements, and principles of Brazilian Jiu-Jitsu in a safe and structured environment.',
      icon: <Users className="w-12 h-12 text-blue-700" />,
      features: ['Beginner-friendly environment', 'Focus on safety and proper technique', 'Progressive learning structure']
    },
    {
      title: 'Advanced Techniques',
      description: 'For experienced practitioners looking to refine their skills and expand their arsenal with advanced submissions, sweeps, and escapes.',
      icon: <Sword className="w-12 h-12 text-blue-700" />,
      features: ['Complex guard systems', 'Advanced submission chains', 'Competition-focused training']
    },
    {
      title: 'Competition Team',
      description: 'Join our competition team and represent One Tribe BJJ in local, national, and international tournaments with dedicated coaching and preparation.',
      icon: <Award className="w-12 h-12 text-blue-700" />,
      features: ['Tournament strategy', 'Conditioning and preparation', 'Mental performance coaching']
    },
    {
      title: 'Kids Program',
      description: 'Our kids program instills discipline, builds confidence, and teaches self-defense in a fun, engaging, and supportive environment.',
      icon: <Heart className="w-12 h-12 text-blue-700" />,
      features: ['Age-appropriate curriculum', 'Focus on anti-bullying', 'Character development']
    }
  ];

  return (
    <section id="programs" className="section bg-white">
      <div className="container">
        <h2 className="section-title slide-up">Our Programs</h2>
        <p className="section-subtitle slide-up">
          Whether you're a beginner or an experienced practitioner, we have a program designed to meet your goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
          {programs.map((program, index) => (
            <div 
              key={program.title} 
              className="card p-8 flex flex-col h-full slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{program.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-2 font-bold text-xs">✓</span>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center scale-in">
          <a href="#schedule" className="btn btn-primary">
            View Class Schedule
          </a>
        </div>
      </div>
    </section>
  );
};