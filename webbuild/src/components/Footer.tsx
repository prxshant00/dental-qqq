import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-trust-blue text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-serif font-bold tracking-tight mb-6 block">
              PURE<span className="text-slate-400 font-light">DENT</span>
            </span>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Leading the way in clinical excellence and aesthetic transformations. 
              Our practice is dedicated to providing premium care in a modern, comfortable environment.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-slate-300 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Before & After</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Staff Profiles</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="text-white/60">124 Baker Street, London</li>
              <li>+44 (0) 20 7946 0000</li>
              <li>concierge@puredent.clinic</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          <div>© 2025 PURE DENT CLINICAL GROUP. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
