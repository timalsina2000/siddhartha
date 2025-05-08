import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false });
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300 dark:bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-sky-300 dark:bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-emerald-300 dark:bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
            <span className={`block transition-transform duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              Siddhartha Timalsina
            </span>
            <span className={`block text-amber-500 transition-transform duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              Web Devloper
            </span>
          </h1>
          
          <p 
            className={`max-w-2xl text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '600ms' }}
          >
            Development is turning ideas into websites that work like magic
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <a 
              href="#portfolio" 
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-amber-300 dark:hover:border-amber-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;