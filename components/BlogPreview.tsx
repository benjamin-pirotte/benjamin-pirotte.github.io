import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section className="border-t border-gray-200 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xl text-gray-900">Blog - Latest</h2>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            All posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3 p-5 border border-gray-200 rounded-xl hover:border-gray-400 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
              <span className="text-xs text-gray-400 group-hover:text-gray-700 transition-colors mt-auto pt-1">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
