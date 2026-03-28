import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onBook: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBook }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-trust-blue/5 shadow-sm mb-6">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-trust-blue/60">
                Top Rated Dentistry in London
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif text-trust-blue leading-[1.1] mb-8">
              Exceptional care for your <span className="italic text-slate-400">perfect smile.</span>
            </h1>
            
            <p className="text-lg text-trust-blue/60 leading-relaxed mb-10 max-w-xl">
              Experience the future of dentistry with our state-of-the-art clinical approach. 
              We blend advanced technology with a premium patient experience to ensure your comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="group flex items-center justify-center gap-2 bg-trust-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-trust-blue-hover transition-all shadow-xl shadow-trust-blue/20"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-medium border border-trust-blue/10 hover:bg-white transition-all">
                View Our Results
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl font-serif font-bold text-trust-blue">15k+</div>
                <div className="text-sm text-trust-blue/50">Happy Patients</div>
              </div>
              <div className="w-px h-10 bg-trust-blue/10" />
              <div>
                <div className="text-2xl font-serif font-bold text-trust-blue">4.9/5</div>
                <div className="text-sm text-trust-blue/50">Patient Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-16 lg:mt-0 lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
                alt="Professional Dentist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-trust-blue/20 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-soft-slate rounded-full -z-0 blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-trust-blue/5 rounded-full -z-0 blur-3xl opacity-50" />
            
            <div className="absolute bottom-10 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-trust-blue/5 max-w-[240px]">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-soft-slate flex items-center justify-center text-trust-blue">
                  <Star className="w-6 h-6 fill-trust-blue" />
                </div>
                <div>
                  <div className="text-sm font-bold text-trust-blue">Award Winning</div>
                  <div className="text-xs text-trust-blue/50">Excellence in Cosmetic Dentistry 2025</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
