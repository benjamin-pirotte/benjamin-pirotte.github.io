import Link from 'next/link'
import Header from '@/components/Header'
import { getAllPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-10">Blog</h1>
        <div className="space-y-0">
          {posts.map((post, i) => (
            <div key={post.slug}>
              {i > 0 && <div className="border-t border-gray-100" />}
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-7"
              >
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-base font-semibold text-gray-900 group-hover:text-gray-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
