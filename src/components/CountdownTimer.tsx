
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 text-center max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-lg bg-ikwezi-paper shadow-md">
          <span className="text-2xl md:text-3xl font-bold text-ikwezi-green">{timeLeft.days}</span>
        </div>
        <span className="mt-2 text-sm text-gray-600">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-lg bg-ikwezi-paper shadow-md">
          <span className="text-2xl md:text-3xl font-bold text-ikwezi-green">{timeLeft.hours}</span>
        </div>
        <span className="mt-2 text-sm text-gray-600">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-lg bg-ikwezi-paper shadow-md">
          <span className="text-2xl md:text-3xl font-bold text-ikwezi-green">{timeLeft.minutes}</span>
        </div>
        <span className="mt-2 text-sm text-gray-600">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-lg bg-ikwezi-paper shadow-md">
          <span className="text-2xl md:text-3xl font-bold text-ikwezi-green">{timeLeft.seconds}</span>
        </div>
        <span className="mt-2 text-sm text-gray-600">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
