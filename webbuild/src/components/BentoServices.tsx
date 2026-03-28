import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ShieldCheck, Microscope } from 'lucide-react';

const services = [
  {
    title: "Invisalign",
    description: "Discrete, clear aligners for a perfectly straight smile.",
    icon: <Sparkles className="w-6 h-6 text-trust-blue" />,
    className: "md:col-span-2 md:row-span-2 bg-slate-50",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Implants",
    description: "Permanent solutions for missing teeth.",
    icon: <ShieldCheck className="w-6 h-6 text-trust-blue" />,
    className: "bg-white",
  },
  {
    title: "Routine Care",
    description: "Preventative hygiene and clinical checkups.",
    icon: <Calendar className="w-6 h-6 text-trust-blue" />,
    className: "bg-white",
  },
  {
    title: "Diagnostics",
    description: "Advanced 3D imaging and clinical assessment.",
    icon: <Microscope className="w-6 h-6 text-trust-blue" />,
    className: "md:col-span-2 bg-trust-blue text-white",
    iconColor: "text-white"
  }
];

const BentoServices: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-trust-blue mb-4">Precision Dental Services</h2>
          <p className="text-trust-blue/60 max-w-2xl mx-auto">
            Combining clinical mastery with advanced technology to deliver life-changing results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bento-card group relative overflow-hidden flex flex-col justify-between ${service.className}`}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-opacity-10 flex items-center justify-center mb-4 ${service.iconColor ? 'bg-white/20' : 'bg-trust-blue/5'}`}>
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: `w-6 h-6 ${service.iconColor || 'text-trust-blue'}` })}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${service.iconColor ? 'text-white' : 'text-trust-blue'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${service.iconColor ? 'text-white/70' : 'text-trust-blue/60'}`}>
                  {service.description}
                </p>
              </div>

              {service.image && (
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-50" />
                </div>
              )}

              <div className="mt-auto relative z-10">
                <button className={`text-sm font-semibold flex items-center gap-1 ${service.iconColor ? 'text-white' : 'text-trust-blue'}`}>
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoServices;
