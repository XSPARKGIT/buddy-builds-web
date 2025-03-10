
import React from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import { Construction } from 'lucide-react';

const Index = () => {
  // Set the launch date 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-b from-ikwezi-light to-white">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="w-56 h-56 md:w-64 md:h-64 mb-6 animate-fade-in">
              <img 
                src="/lovable-uploads/69d84498-18cd-4d69-af79-074d77914fc2.png" 
                alt="X Spark Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Under Construction Banner */}
            <div className="flex items-center gap-2 bg-ikwezi-yellow/20 text-ikwezi-green px-4 py-2 rounded-full mb-6 animate-pulse-slow">
              <Construction className="w-5 h-5" />
              <span className="font-semibold">Under Construction</span>
            </div>
            
            {/* Main Content */}
            <div className="text-center max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">We're Building Something Amazing</h1>
              <p className="text-lg text-gray-600 mb-8">
                Our new website is on its way. We're working hard to bring you an exceptional experience.
                Stay tuned for our launch!
              </p>
              
              {/* Countdown Timer */}
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Launching In</h2>
              <CountdownTimer targetDate={launchDate} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} X Spark. All rights reserved.</p>
        <p className="mt-2">Designed by X Spark</p>
      </footer>
    </div>
  );
};

export default Index;
