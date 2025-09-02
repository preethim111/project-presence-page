import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-hero-bg text-hero-text flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Small intro text */}
          {/* <p className="text-sm md:text-base text-hero-text/60 mb-6 uppercase tracking-wider font-light">
            Data Science Student & ML Engineer
          </p> */}
          
          {/* Large name title - Mosley style */}
          <h1 className="hero-title text-6xl md:text-8xl lg:text-[10rem] text-hero-text mb-8 leading-none tracking-tight">
            Preethi<br />Manne
          </h1>
          
          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-hero-text/80 leading-relaxed font-light">
              Transforming complex data into actionable insights through innovative machine learning solutions and elegant full-stack development.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="px-12 py-4 text-base border-hero-text/20 text-hero-text hover:bg-hero-text/10 bg-transparent"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
            <Button 
              size="lg" 
              className="px-12 py-4 text-base bg-hero-text text-hero-bg hover:bg-hero-text/90"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-hero-text/60 hover:text-hero-text transition-colors duration-300 animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
      
      {/* Subtle decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hero-text/5 to-background/10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;