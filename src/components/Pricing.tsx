import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for beginners looking to start their BJJ journey',
      monthlyPrice: 149,
      annualPrice: 129,
      features: [
        'Access to Fundamentals classes',
        '2 classes per week',
        'Online learning portal',
        'Rank promotion eligibility'
      ],
      isPopular: false
    },
    {
      name: 'Standard',
      description: 'Our most popular option for dedicated practitioners',
      monthlyPrice: 189,
      annualPrice: 159,
      features: [
        'Access to all classes',
        'Unlimited training',
        'Online learning portal',
        'Rank promotion eligibility',
        'Access to open mat sessions',
        'Discounted private lessons'
      ],
      isPopular: true
    },
    {
      name: 'Competition',
      description: 'For serious athletes preparing for competition',
      monthlyPrice: 229,
      annualPrice: 189,
      features: [
        'Access to all classes',
        'Unlimited training',
        'Competition team training',
        'Online learning portal',
        'Rank promotion eligibility',
        'Access to open mat sessions',
        'One free private lesson monthly',
        'Competition coaching'
      ],
      isPopular: false
    }
  ];
  
  const FAQs = [
    {
      question: 'Do I need to be in shape to start BJJ?',
      answer: 'No, you don\'t need to be in shape to start. BJJ is for everyone and is a great way to get in shape. Our fundamentals program is designed to gradually build your conditioning while teaching you the basics of BJJ.'
    },
    {
      question: 'How often should I train?',
      answer: 'For beginners, we recommend training 2-3 times per week to allow your body to adapt to the new movements and stresses. As you progress and your conditioning improves, you can increase your training frequency.'
    },
    {
      question: 'Do I need a gi (kimono) to start?',
      answer: 'Yes, for gi classes you will need a Brazilian Jiu-Jitsu gi. We have gis available for purchase at the academy, or you can buy one online. For no-gi classes, you\'ll need a rash guard and shorts/spats.'
    },
    {
      question: 'Is there a contract or commitment?',
      answer: 'We offer both month-to-month and annual membership options. Annual memberships come with a discount but require a 12-month commitment. Month-to-month memberships can be cancelled with 30 days\' notice.'
    }
  ];

  return (
    <section id="pricing" className="section bg-slate-50">
      <div className="container">
        <h2 className="section-title slide-up">Membership Options</h2>
        <p className="section-subtitle slide-up">
          Choose the membership plan that best fits your training goals and schedule.
        </p>
        
        {/* Billing toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12 scale-in">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-blue-900' : 'text-slate-500'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative rounded-full w-12 h-6 transition-colors duration-300 ease-in-out bg-blue-900"
          >
            <span
              className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out transform ${
                isAnnual ? 'translate-x-6' : ''
              }`}
            ></span>
          </button>
          <div className="flex items-center">
            <span className={`text-sm font-medium ${isAnnual ? 'text-blue-900' : 'text-slate-500'}`}>Annual</span>
            <span className="ml-2 text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
              Save 15%
            </span>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`relative rounded-lg overflow-hidden transition-all duration-300 slide-up ${
                plan.isPopular 
                  ? 'border-2 border-blue-500 shadow-xl' 
                  : 'border border-slate-200 shadow-md'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="bg-white p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <p className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="ml-2 text-sm text-slate-500">/ month</span>
                  </p>
                  {isAnnual && (
                    <p className="text-sm text-green-700">Billed annually (${plan.annualPrice * 12})</p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`w-full block text-center py-3 px-6 rounded-md font-medium transition-colors ${
                    plan.isPopular 
                      ? 'bg-blue-900 text-white hover:bg-blue-800'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  Choose {plan.name}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQs */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-8 slide-up">Frequently Asked Questions</h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {FAQs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md p-6 slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 text-blue-700 mr-2" />
                    {faq.question}
                  </h4>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};