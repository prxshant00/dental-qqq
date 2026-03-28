import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoServices from './components/BentoServices';
import ComparisonSlider from './components/ComparisonSlider';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onBook={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onBook={() => setIsBookingOpen(true)} />
        
        {/* Add a section for the booking trigger if needed, or Hero button works */}
        
        <BentoServices />
        <ComparisonSlider />
      </main>

      <Footer />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      {/* Global Book Button for Desktop */}
      <button 
        onClick={() => setIsBookingOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-trust-blue text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all md:flex items-center gap-2 hidden"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        Book Appointment
      </button>

      {/* Hero Button Hack: Since Hero is a separate component, I'll pass the toggle if I want consistent behavior */}
      {/* But for this demo, I'll just make the App manage the state and maybe pass it down if needed */}
      {/* Actually, I'll update Hero and Navbar to trigger this state if I had more time, 
          but I can also just use a global event or context. For simplicity, I'll add the trigger to the Hero button via props. */}
    </div>
  );
};

export default App;
