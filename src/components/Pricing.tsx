import React from 'react'
import { Check, Brain, Zap, Star } from 'lucide-react'

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/forever',
      description: 'Perfect for getting started with personal knowledge management',
      icon: Brain,
      features: [
        'Upload up to 100MB of documents',
        '50 AI questions per month',
        'Basic document summaries',
        'Simple search functionality',
        'Personal knowledge base',
        'Basic insights dashboard'
      ],
      buttonText: 'Get Started Free',
      buttonClass: 'btn-primary w-full',
      popular: false
    },
    {
      name: 'Premium',
      price: '$19',
      period: '/month',
      description: 'Advanced features for power users and professionals',
      icon: Zap,
      features: [
        'Unlimited document uploads',
        'Unlimited AI questions',
        'Advanced summaries & insights',
        'Trend detection & analytics',
        'Concept linking across documents',
        'Priority support',
        'Export capabilities',
        'Advanced search filters'
      ],
      buttonText: 'Start Premium Trial',
      buttonClass: 'btn-primary w-full',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'Team collaboration and enterprise-grade security',
      icon: Star,
      features: [
        'Everything in Premium',
        'Team knowledge bases',
        'Advanced security & compliance',
        'Custom integrations',
        'Dedicated account manager',
        'SSO & user management',
        'Custom AI training',
        'API access'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'btn-secondary w-full',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm mb-4">
            Simple, transparent pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Choose Your Knowledge Plan
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Start free and upgrade as your knowledge base grows. All plans include secure, private processing.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card relative ${plan.popular ? 'border-white' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <plan.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={plan.buttonClass}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing