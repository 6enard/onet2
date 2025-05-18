import React, { useState } from "react";

type Program = {
  name: string;
  time: string;
  level: string;
  description: string;
};

type DaySchedule = {
  day: string;
  programs: Program[];
};

const scheduleData: DaySchedule[] = [
  {
    day: "Monday",
    programs: [
      {
        name: "Wrestling",
        time: "18:00 - 19:30",
        level: "All Levels",
        description:
          "A combat sport focusing on grappling techniques, takedowns, and control. Perfect for building strength and learning how to dominate opponents on the mat.",
      },
      {
        name: "Kickboxing",
        time: "19:30 - 20:30",
        level: "All Levels",
        description:
          "A striking-based martial art that combines punches, kicks, and footwork, ideal for self-defense and cardio fitness.",
      },
    ],
  },
  {
    day: "Tuesday",
    programs: [
      {
        name: "Nogi",
        time: "12:00 - 13:30",
        level: "All Levels",
        description:
          "Brazilian Jiu-Jitsu training without the gi, emphasizing speed, leverage, and control in grappling techniques.",
      },
      {
        name: "Nogi",
        time: "18:00 - 20:00",
        level: "All Levels",
        description:
          "A style of Brazilian Jiu-Jitsu practiced without the traditional gi, focusing on grappling techniques using grips on the opponent's body instead of clothing.",
      },
    ],
  },
  {
    day: "Wednesday",
    programs: [
      {
        name: "Gi",
        time: "18:00 - 20:00",
        level: "All Levels",
        description:
          "Brazilian Jiu-Jitsu training using the gi, which allows for more control and submission options by gripping the clothing.",
      },
    ],
  },
  {
    day: "Thursday",
    programs: [
      {
        name: "Nogi",
        time: "12:00 - 13:30",
        level: "All Levels",
        description:
          "Brazilian Jiu-Jitsu training without the gi, emphasizing speed, leverage, and control in grappling techniques.",
      },
      {
        name: "Nogi",
        time: "18:00 - 20:00",
        level: "All Levels",
        description:
          "Brazilian Jiu-Jitsu training without the gi, emphasizing speed, leverage, and control in grappling techniques.",
      },
    ],
  },
  {
    day: "Friday",
    programs: [
      {
        name: "Kickboxing",
        time: "18:00 - 19:00",
        level: "All Levels",
        description:
          "Striking-based training focusing on punches, kicks, and combinations. A great way to improve fitness and learn powerful self-defense skills.",
      },
      {
        name: "MMA",
        time: "19:00 - 20:30",
        level: "Advanced",
        description:
          "Mixed Martial Arts combines striking and grappling techniques from multiple disciplines. Designed for advanced students to develop versatile fighting skills.",
      },
    ],
  },
  {
    day: "Saturday",
    programs: [
      {
        name: "Striking",
        time: "10:30 - 11:30",
        level: "All Levels",
        description:
          "A high-intensity class focused on boxing and kickboxing fundamentals. Great for building speed, power, and agility in striking.",
      },
      {
        name: "Gi/Nogi Open Mat",
        time: "11:30 - 13:00",
        level: "All Levels",
        description:
          "Open mat session where students can practice techniques in either gi or nogi. Ideal for sparring and skill refinement in a relaxed environment.",
      },
    ],
  },
  {
    day: "Sunday",
    programs: [
      {
        name: "Judo",
        time: "11:00 - 13:30",
        level: "All Levels",
        description:
          "Traditional Japanese martial art focusing on throws and ground grappling techniques. Suitable for all skill levels.",
      },
    ],
  },
];

const daysShort = [
  { id: "Monday", label: "Mon" },
  { id: "Tuesday", label: "Tue" },
  { id: "Wednesday", label: "Wed" },
  { id: "Thursday", label: "Thu" },
  { id: "Friday", label: "Fri" },
  { id: "Saturday", label: "Sat" },
  { id: "Sunday", label: "Sun" },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-800";
    case "Advanced":
      return "bg-red-100 text-red-800";
    case "Kids":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-black text-white";
  }
};

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState("Monday");

  const activeSchedule = scheduleData.find((d) => d.day === activeDay);

  return (
    <section id="schedule" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-4 text-black">
          Class Schedule
        </h2>
        <p className="section-subtitle text-center mb-8 text-gray-700">
          Find the perfect class for your skill level and availability. Our diverse schedule offers options for everyone.
        </p>

        {/* Day selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {daysShort.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                activeDay === day.id
                  ? "bg-black text-white border-red-600"
                  : "bg-white text-black border-green-600 hover:bg-green-600 hover:text-white"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Schedule table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-slate-100 ">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold border border-white">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold border border-white">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold border border-white">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activeSchedule?.programs.map((program, index) => (
                  <React.Fragment key={index}>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900">
                        {program.time}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm font-semibold text-black">
                        {program.name}
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(
                            program.level
                          )}`}
                        >
                          {program.level}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={3}
                        className="px-6 py-2 text-sm text-gray-600 italic bg-gray-50"
                      >
                        {program.description}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
