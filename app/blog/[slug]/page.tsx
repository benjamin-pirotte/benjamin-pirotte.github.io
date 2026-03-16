import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import Header from '@/components/Header'
import { getAllPosts, getPost } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

function extractHeadings(content: string) {
  return Array.from(content.matchAll(/^(#{2,3})\s+(.+)$/gm)).map(m => ({
    level: m[1].length,
    text: m[2].trim(),
    id: m[2].trim().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const headings = extractHeadings(post.content)

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block"
        >
          ← All posts
        </Link>
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
          <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-10">{post.title}</h1>

        {headings.length > 0 && (
          <nav className="mb-10 p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Table of contents</p>
            <ol className="space-y-1">
              {headings.map(h => (
                <li key={h.id} style={{ paddingLeft: h.level === 3 ? '1rem' : '0' }}>
                  <a href={`#${h.id}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="prose">
          <MDXRemote source={post.content} options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }} />
        </div>
      </main>
    </>
  )
}
