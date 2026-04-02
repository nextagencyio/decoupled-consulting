import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_SERVICES } from '@/lib/queries'
import { ServicesData } from '@/lib/types'
import Header from '../components/Header'
import ServiceCard from '../components/ServiceCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Services | Apex Strategy Group',
  description: 'Explore our strategic consulting and transformation services.',
}

async function getServices() {
  try {
    const client = getClient()
    const data = await client.raw(GET_SERVICES, { first: 50 })
    return data?.nodeServices?.nodes || []
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export default async function ServicesPage() {
  const items = await getServices()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight">
                Services
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a comprehensive suite of consulting services designed to help organizations navigate complexity and achieve sustainable growth.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-2 bg-accent-400 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Services Yet</h2>
              <p className="text-gray-500">
                Services will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item: any) => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
