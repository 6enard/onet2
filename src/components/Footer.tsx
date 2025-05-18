import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 text-black">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">One Tribe Jiu Jitsu</h3>
            <p className="mb-6">
              Unleash Your Inner Warrior
            </p>
            <div className="mb-6">
              The Clubhouse, Ramata Greens Apartments<br />
              Nairobi, Kenya
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/OneTribeBJJ/"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/onetribebjj"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4 text-black">
              <li>
                <p>
                  The Clubhouse, Ramata Greens Apartments<br />
                  Nairobi, Kenya
                </p>
              </li>
              <li>
                <a href="mailto:info@onetribejiujitsu.co.ke" className="hover:text-red-600 transition-colors">
                  info@onetribejiujitsu.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0">
            &copy; {currentYear} One Tribe Jiu Jitsu. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-4 text-sm text-black">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
