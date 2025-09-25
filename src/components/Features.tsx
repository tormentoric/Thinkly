import React from 'react'
import { Upload, MessageSquare, FileText, TrendingUp, Link, Shield } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Upload,
      title: 'Upload & Link Documents',
      description: 'PDFs, notes, emails, spreadsheets, and bookmarks - all in one secure place.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Queries',
      description: 'Ask questions in plain English and get answers from your personal knowledge base.'
    },
    {
      icon: FileText,
      title: 'Smart Summaries',
      description: 'Generate concise, actionable summaries of long documents instantly.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Detection',
      description: 'Discover patterns and insights from your personal data over time.'
    },
    {
      icon: Link,
      title: 'Concept Linking',
      description: 'Automatically connect related ideas and concepts across all your documents.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data stays private and secure with end-to-end encryption.'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Powerful Features for Knowledge Management
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to organize, analyze, and extract insights from your personal information.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features