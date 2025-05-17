import React from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Unlimited Training',
      description: 'Monthly membership for regular members.',
      price: 'Ksh. 5,000',
      tag: 'Regular',
      color: 'border-green-700 text-green-700',
      buttonColor: 'bg-green-700 text-white hover:bg-green-800',
    },
    {
      name: 'Unlimited Training',
      description: 'Special student discount for full access.',
      price: 'Ksh. 3,000',
      tag: 'Student',
      color: 'bg-green-700 text-white border-green-700',
      buttonColor: 'bg-white text-green-700 hover:bg-slate-100',
      isPopular: true,
    },
    {
      name: 'Drop-in',
      description: 'Single class attendance option.',
      price: 'Ksh. 1,000',
      tag: 'Single Class',
      color: 'border-black text-black',
      buttonColor: 'bg-black text-white hover:bg-gray-900',
    }
  ];

  return (
    <section id="pricing" className="section bg-white py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-black mb-4">Our Training Rates</h2>
        <p className="text-center text-slate-600 mb-12">
          Flexible options for every athlete.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border p-8 shadow-md transition-transform duration-300 hover:scale-105 slide-up ${plan.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="mb-4 text-sm">{plan.description}</p>
              <div className="mb-6">
                <p className="text-3xl font-extrabold">{plan.price}</p>
                <p className="text-sm">{plan.tag}</p>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span>Access to all classes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2" />
                  <span>Open mat sessions</span>
                </li>
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-md font-semibold transition-colors ${plan.buttonColor}`}
              >
                Choose {plan.tag}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
