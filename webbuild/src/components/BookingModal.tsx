import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const services = ["Invisalign", "Teeth Whitening", "Implants", "General Checkup", "Emergency"];

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: submitError } = await supabase
        .from('bookings')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            service: formData.service,
            status: 'pending' 
          }
        ]);

      if (submitError) throw submitError;
      setStep(3);
    } catch (err: any) {
      console.error('Error submitting booking:', err);
      setError('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-trust-blue/20 backdrop-blur-sm z-[60]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-2xl font-serif text-trust-blue">Book Appointment</h2>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`h-1 w-8 rounded-full ${step >= i ? 'bg-trust-blue' : 'bg-trust-blue/10'}`} />
                  ))}
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-soft-slate rounded-full transition-colors text-trust-blue/40 hover:text-trust-blue"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="min-h-[400px]">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <label className="block">
                    <span className="text-sm font-semibold text-trust-blue/60 uppercase tracking-wider mb-2 block">Full Name</span>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-trust-blue/30" />
                      <input 
                        type="text" 
                        placeholder="Dr. John Smith"
                        className="w-full bg-soft-slate border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-trust-blue/10 transition-all outline-none text-trust-blue"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-trust-blue/60 uppercase tracking-wider mb-2 block">Email Address</span>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-trust-blue/30" />
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-soft-slate border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-trust-blue/10 transition-all outline-none text-trust-blue"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </label>

                  <button 
                    disabled={!formData.name || !formData.email}
                    onClick={handleNext}
                    className="w-full bg-trust-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-trust-blue-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-8 shadow-lg shadow-trust-blue/20"
                  >
                    Select Service <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <span className="text-sm font-semibold text-trust-blue/60 uppercase tracking-wider mb-4 block">Select clinical Service</span>
                  <div className="grid gap-3">
                    {services.map(s => (
                      <button
                        key={s}
                        onClick={() => setFormData({...formData, service: s})}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${formData.service === s ? 'bg-trust-blue/5 border-trust-blue text-trust-blue font-bold' : 'bg-white border-trust-blue/10 text-trust-blue/60 hover:border-trust-blue/30'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button 
                      onClick={handleBack} 
                      disabled={isSubmitting}
                      className="flex-1 border border-trust-blue/10 py-4 rounded-xl font-bold text-trust-blue hover:bg-soft-slate transition-all disabled:opacity-50"
                    >
                      Back
                    </button>
                    <button 
                      disabled={!formData.service || isSubmitting}
                      onClick={handleSubmit}
                      className="flex-[2] bg-trust-blue text-white py-4 rounded-xl font-bold hover:bg-trust-blue-hover transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Confirming...
                        </>
                      ) : (
                        'Request Appointment'
                      )}
                    </button>
                  </div>
                  {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif text-trust-blue mb-2">Request Received</h3>
                  <p className="text-trust-blue/60 mb-8">
                    We've received your request for {formData.service}. Our clinical coordinator will call you within 15 minutes to confirm.
                  </p>
                  <button 
                    onClick={onClose}
                    className="w-full bg-trust-blue text-white py-4 rounded-xl font-bold hover:bg-trust-blue-hover transition-all"
                  >
                    Close & Continue
                  </button>
                </motion.div>
              )}
            </div>

            <div className="mt-20 pt-8 border-t border-trust-blue/5">
              <div className="flex items-center gap-4 text-trust-blue/40 italic">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span className="text-xs">Your data is processed under clinical confidentiality protocols (HIPAA/GDPR compliant).</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default BookingModal;
