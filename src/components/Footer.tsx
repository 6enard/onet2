import React from 'react';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ONE TRIBE BJJ</h3>
            <p className="text-slate-400 mb-6">
              Transform your life through Brazilian Jiu-Jitsu in a supportive community environment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#programs" className="text-slate-400 hover:text-white transition-colors">Programs</a>
              </li>
              <li>
                <a href="#schedule" className="text-slate-400 hover:text-white transition-colors">Schedule</a>
              </li>
              <li>
                <a href="#instructors" className="text-slate-400 hover:text-white transition-colors">Instructors</a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Academy Hours</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>6:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4 text-slate-400">
              <li>
                <p>123 Main Street<br />San Diego, CA 92101</p>
              </li>
              <li>
                <a href="tel:+16195551234" className="hover:text-white transition-colors">
                  (619) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@onetribebjj.com" className="hover:text-white transition-colors">
                  info@onetribebjj.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} One Tribe BJJ. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};