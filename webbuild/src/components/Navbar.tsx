import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onBook: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBook }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-trust-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold text-trust-blue tracking-tight">
              PURE<span className="text-slate-400 font-light">DENT</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-trust-blue/70 hover:text-trust-blue transition-colors">Services</a>
            <a href="#results" className="text-sm font-medium text-trust-blue/70 hover:text-trust-blue transition-colors">Results</a>
            <a href="#about" className="text-sm font-medium text-trust-blue/70 hover:text-trust-blue transition-colors">About</a>
            <a 
              href="tel:1234567890"
              className="hidden lg:flex items-center gap-2 text-trust-blue px-4 py-2 rounded-full text-sm font-medium border border-trust-blue/10 hover:bg-trust-blue/5 transition-all"
            >
              <Phone className="w-4 h-4" />
              123-456-7890
            </a>
            <button 
              onClick={onBook}
              className="flex items-center gap-2 bg-trust-blue text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-trust-blue-hover transition-all shadow-lg shadow-trust-blue/10"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-trust-blue">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-trust-blue/5 py-4 px-4 space-y-4">
          <a href="#services" className="block text-base font-medium text-trust-blue/70">Services</a>
          <a href="#results" className="block text-base font-medium text-trust-blue/70">Results</a>
          <a href="#about" className="block text-base font-medium text-trust-blue/70">About</a>
          <button 
            onClick={() => {
              onBook();
              setIsOpen(false);
            }}
            className="w-full bg-trust-blue text-white px-6 py-3 rounded-xl text-base font-medium"
          >
            Book Appointment
          </button>
          <a 
            href="tel:1234567890"
            className="w-full flex justify-center items-center gap-2 text-trust-blue border border-trust-blue/10 px-6 py-3 rounded-xl text-base font-medium"
          >
            <Phone className="w-5 h-5" />
            Call Now: 1234567890
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
