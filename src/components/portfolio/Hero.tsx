import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 animate-pulse"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Preethi Manne
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-light">
            Data Science Student & Machine Learning Engineer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging data science and machine learning to solve real-world problems. 
            Experience in predictive modeling, data visualization, and full-stack development.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;