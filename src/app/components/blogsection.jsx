'use client';

import Image from 'next/image';

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      image: '/blog/blog-1.jpg',
      author: 'Dr. Mansi Patel',
      date: 'May 21, 2026',
      title: 'The Correct Way to Floss for Healthier Gums',
      excerpt:
        'Flossing is essential for maintaining strong oral hygiene, yet many people either skip it or do it incorrectly. Proper technique helps remove plaque buildup, reduces gum inflammation, and prevents long-term periodontal issues...',
    },
    {
      id: 2,
      image: '/blog/blog-2.jpg',
      author: 'Dr. Mansi Patel',
      date: 'May 18, 2026',
      title: 'Understanding the Connection Between Oral Health and Heart Wellness',
      excerpt:
        'Your oral health plays a significant role in your overall well-being. Research shows that poor gum health may be linked to cardiovascular conditions, making regular dental care essential for long-term heart health...',
    },
    {
      id: 3,
      image: '/blog/blog-3.jpg',
      author: 'Dr. Mansi Patel',
      date: 'May 15, 2026',
      title: '7 Teeth-Friendly Foods for a Naturally Brighter Smile',
      excerpt:
        'A healthy smile starts with more than brushing and flossing—nutrition matters too. Certain foods help strengthen enamel, reduce plaque formation, and naturally support whiter, healthier-looking teeth...',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 md:mb-12">
          Dental Care & Smile Insights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group"
            >

              {/* Image */}
              <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">

                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={post.id === 1}
                />

              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">

                <div className="text-xs text-gray-500 mb-2 font-medium">
                  By {post.author} • {post.date}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#8B7355] transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-[#B8860B] font-semibold text-sm hover:text-[#8B6914] transition-colors"
                >
                  Read More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>

              </div>
            </article>
          ))}

        </div>

        <div className="mt-10 md:mt-12 text-center">
          <button className="px-7 py-3 bg-[#8B7355] text-white rounded-full font-semibold hover:bg-[#6B5540] transition-colors shadow-md">
            Explore More Dental Articles
          </button>
        </div>

      </div>
    </section>
  );
}