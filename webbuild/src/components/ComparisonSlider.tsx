import React, { useState, useRef } from 'react';

interface ComparisonSliderProps {
  beforeImage?: string;
  afterImage?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage = "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop",
  afterImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section id="results" className="py-24 bg-soft-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl lg:text-5xl font-serif text-trust-blue mb-6">Visible Transformation.</h2>
            <p className="text-trust-blue/60 leading-relaxed mb-8">
              Trust is built on results. See how our clinical expertise transforms smiles using the latest in aesthetic dentistry protocols.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-trust-blue/80">
                <div className="w-1.5 h-1.5 rounded-full bg-trust-blue" />
                <span className="text-sm font-medium">Digital Smile Design</span>
              </div>
              <div className="flex items-center gap-3 text-trust-blue/80">
                <div className="w-1.5 h-1.5 rounded-full bg-trust-blue" />
                <span className="text-sm font-medium">Precision Porcelain Veneers</span>
              </div>
              <div className="flex items-center gap-3 text-trust-blue/80">
                <div className="w-1.5 h-1.5 rounded-full bg-trust-blue" />
                <span className="text-sm font-medium">Minimally Invasive Care</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div 
              ref={containerRef}
              className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none border border-trust-blue/5"
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
              {/* After Image */}
              <img 
                src={afterImage} 
                className="absolute inset-0 w-full h-full object-cover"
                alt="After"
              />
              
              {/* Before Image with Clip Path */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={beforeImage} 
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-90"
                  alt="Before"
                />
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-trust-blue/10">
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-trust-blue/20 rounded-full" />
                    <div className="w-1 h-3 bg-trust-blue/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-widest z-20">
                Before
              </div>
              <div className="absolute top-6 right-6 px-3 py-1 bg-trust-blue/20 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-widest z-20">
                After
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;
