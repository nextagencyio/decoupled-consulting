'use client'

import { Target, TrendingUp, Users, Shield, Lightbulb, Award } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Strategic Focus',
    description: 'We align every recommendation with your core business objectives for measurable impact.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Growth',
    description: 'Our clients average 40% revenue growth within the first 18 months of engagement.',
  },
  {
    icon: Users,
    title: 'Expert Teams',
    description: 'Senior consultants with 15+ years of industry-specific experience on every project.',
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Comprehensive risk assessment frameworks that protect your investments and reputation.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Led',
    description: 'Cutting-edge methodologies that keep you ahead of market disruption and competition.',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized by industry leaders for excellence in strategic consulting and client outcomes.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose Apex Strategy Group
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine deep expertise with innovative thinking to deliver transformative results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
