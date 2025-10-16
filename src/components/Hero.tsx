import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-building.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[650px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/40" />
        
        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <p className="text-white text-sm md:text-base font-semibold tracking-wider animate-fade-in-up">
            ✨ WELCOME TO
          </p>
        </div>
        
        <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto mb-6 animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}>
          RAJSHAHI SHIKKHA BOARD GOVT.
          <br />
          <span className="text-gradient bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
            MODEL SCHOOL & COLLEGE
          </span>
        </h1>

        <p className="text-white/90 text-base md:text-xl max-w-3xl mx-auto mb-8 font-light animate-fade-in-up" 
           style={{ animationDelay: '0.4s' }}>
          Nurturing Excellence, Building Future Leaders Since 1965
          <br />
          <span className="text-orange-300 font-semibold">A Premier Educational Institution Under Rajshahi Education Board</span>
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            className="gradient-primary hover:shadow-primary transition-all hover:scale-105 font-bold text-base px-8 py-6 rounded-full"
          >
            Apply for Admission
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary transition-all hover:scale-105 font-bold text-base px-8 py-6 rounded-full"
          >
            Explore Campus
          </Button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all hover-lift">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1">2000+</div>
            <div className="text-xs md:text-sm text-white/80 font-medium">Students</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all hover-lift">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1">150+</div>
            <div className="text-xs md:text-sm text-white/80 font-medium">Teachers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all hover-lift">
            <div className="text-2xl md:text-4xl font-bold text-white mb-1">98%</div>
            <div className="text-xs md:text-sm text-white/80 font-medium">Pass Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
