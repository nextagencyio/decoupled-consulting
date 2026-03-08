import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_INSIGHTS } from '@/lib/queries'
import { InsightsData } from '@/lib/types'
import Header from '../components/Header'
import InsightCard from '../components/InsightCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Insights | Apex Strategy Group',
  description: 'Expert perspectives on strategy, leadership, and business transformation.',
}

async function getInsights() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<InsightsData>({
      query: GET_INSIGHTS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeInsights?.nodes || []
  } catch (error) {
    console.error('Error fetching insights:', error)
    return []
  }
}

export default async function InsightsPage() {
  const items = await getInsights()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight">
                Insights
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Expert perspectives on strategy, leadership, and the forces shaping the future of business.
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
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Insights Yet</h2>
              <p className="text-gray-500">
                Insights will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item) => (
                <InsightCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
