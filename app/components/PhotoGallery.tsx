'use client'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
    alt: 'Team strategy session',
  },
  {
    src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80&fit=crop',
    alt: 'Modern office environment',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&fit=crop',
    alt: 'Business meeting in progress',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop',
    alt: 'Contemporary office space',
  },
]

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Working Environment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaboration, innovation, and excellence define how we work with our clients.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl group aspect-square">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
