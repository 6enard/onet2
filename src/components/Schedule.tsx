import React, { useState } from 'react';
import { Clock } from 'lucide-react';

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('monday');
  
  const schedule = {
    monday: [
      { time: '06:00 - 07:30', class: 'All Levels Gi', level: 'All Levels' },
      { time: '12:00 - 13:30', class: 'Fundamentals Gi', level: 'Beginner' },
      { time: '18:00 - 19:30', class: 'Advanced Gi', level: 'Advanced' },
      { time: '19:45 - 21:00', class: 'No-Gi Competition', level: 'Advanced' }
    ],
    tuesday: [
      { time: '06:00 - 07:30', class: 'Fundamentals No-Gi', level: 'Beginner' },
      { time: '12:00 - 13:30', class: 'All Levels No-Gi', level: 'All Levels' },
      { time: '16:30 - 17:30', class: 'Kids BJJ (5-9)', level: 'Kids' },
      { time: '18:00 - 19:30', class: 'Fundamentals Gi', level: 'Beginner' },
      { time: '19:45 - 21:00', class: 'Advanced Gi', level: 'Advanced' }
    ],
    wednesday: [
      { time: '06:00 - 07:30', class: 'All Levels Gi', level: 'All Levels' },
      { time: '12:00 - 13:30', class: 'Fundamentals Gi', level: 'Beginner' },
      { time: '18:00 - 19:30', class: 'No-Gi All Levels', level: 'All Levels' },
      { time: '19:45 - 21:00', class: 'Competition Training', level: 'Advanced' }
    ],
    thursday: [
      { time: '06:00 - 07:30', class: 'Fundamentals No-Gi', level: 'Beginner' },
      { time: '12:00 - 13:30', class: 'All Levels No-Gi', level: 'All Levels' },
      { time: '16:30 - 17:30', class: 'Kids BJJ (10-15)', level: 'Kids' },
      { time: '18:00 - 19:30', class: 'Fundamentals Gi', level: 'Beginner' },
      { time: '19:45 - 21:00', class: 'Advanced Gi', level: 'Advanced' }
    ],
    friday: [
      { time: '06:00 - 07:30', class: 'All Levels Gi', level: 'All Levels' },
      { time: '12:00 - 13:30', class: 'Open Mat', level: 'All Levels' },
      { time: '18:00 - 19:30', class: 'Fundamentals No-Gi', level: 'Beginner' },
      { time: '19:45 - 21:00', class: 'Advanced No-Gi', level: 'Advanced' }
    ],
    saturday: [
      { time: '10:00 - 11:30', class: 'All Levels Gi', level: 'All Levels' },
      { time: '11:45 - 13:00', class: 'Competition Training', level: 'Advanced' },
      { time: '13:15 - 14:15', class: 'Kids BJJ (All Ages)', level: 'Kids' }
    ],
    sunday: [
      { time: '10:00 - 12:00', class: 'Open Mat', level: 'All Levels' }
    ]
  };
  
  const days = [
    { id: 'monday', label: 'Mon' },
    { id: 'tuesday', label: 'Tue' },
    { id: 'wednesday', label: 'Wed' },
    { id: 'thursday', label: 'Thu' },
    { id: 'friday', label: 'Fri' },
    { id: 'saturday', label: 'Sat' },
    { id: 'sunday', label: 'Sun' }
  ];
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      case 'Kids':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <section id="schedule" className="section bg-slate-50">
      <div className="container">
        <h2 className="section-title slide-up">Class Schedule</h2>
        <p className="section-subtitle slide-up">
          Find the perfect class for your skill level and availability. Our diverse schedule offers options for everyone.
        </p>
        
        {/* Day selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 scale-in">
          {days.map(day => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeDay === day.id 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>
        
        {/* Schedule table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden scale-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Class</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-700">Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {schedule[activeDay as keyof typeof schedule].map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <Clock className="w-4 h-4 text-slate-400 mr-2" />
                      <span className="text-sm font-medium text-slate-900">{item.time}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{item.class}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(item.level)}`}>
                        {item.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center fade-in">
          <p className="text-slate-600 mb-4">
            Not sure which class is right for you? Contact us for a free trial class!
          </p>
          <a href="#contact" className="btn btn-primary">
            Book Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};