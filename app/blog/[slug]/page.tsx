import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Header from '@/components/Header'
import { getAllPosts, getPost } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

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
        <div className="prose">
          <MDXRemote source={post.content} />
        </div>
      </main>
    </>
  )
}
