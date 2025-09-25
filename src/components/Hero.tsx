import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Brain Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
            <Brain className="w-12 h-12 text-white brain-icon" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Your Personal<br />
          Knowledge Concierge
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your documents, notes, and ideas into an intelligent knowledge base. 
          Ask questions, get insights, and never lose track of important information again.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
            <span>Start Building Your Knowledge Base</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary text-lg px-8 py-4">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;