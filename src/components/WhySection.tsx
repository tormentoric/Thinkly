import React from 'react';
import { Check, Zap } from 'lucide-react';

const WhySection: React.FC = () => {
  const benefits = [
    'Never lose important information again',
    'Transform documents into actionable insights',
    'Save hours of manual research and analysis',
    'Build your personal knowledge graph',
    'Make better decisions with data-driven insights'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Why Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Thinkly AI?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Stop losing valuable information in scattered files and forgotten bookmarks. 
              Build a centralized, intelligent system that grows with your knowledge.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary flex items-center space-x-2">
              <span>View Pricing Plans</span>
              <Zap className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column - AI Insights Demo */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="bg-black rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">AI-Powered Insights</h3>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-400 italic mb-3">
                  "What are the key themes from my research papers this quarter?"
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300 mb-3">
                  Based on your 24 uploaded papers, the main themes are: 
                  <span className="text-white font-semibold"> Machine Learning (67%)</span>, 
                  <span className="text-white font-semibold"> Data Privacy (45%)</span>, and 
                  <span className="text-white font-semibold"> User Experience (38%)</span>. 
                  I found 12 cross-references between these topics...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;