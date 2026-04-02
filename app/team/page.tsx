import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_TEAM_MEMBERS } from '@/lib/queries'
import { TeamMembersData } from '@/lib/types'
import Header from '../components/Header'
import TeamMemberCard from '../components/TeamMemberCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Team Members | Apex Strategy Group',
  description: 'Meet the experienced professionals behind Apex Strategy Group.',
}

async function getTeamMembers() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_TEAM_MEMBERS, { first: 50 })
    return data?.nodeTeamMembers?.nodes || []
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export default async function TeamMembersPage() {
  const items = await getTeamMembers()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight">
                Our Team
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Meet the experienced professionals who bring deep industry expertise and a passion for delivering exceptional results.
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
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Team Members Yet</h2>
              <p className="text-gray-500">
                Team Members will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item) => (
                <TeamMemberCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
