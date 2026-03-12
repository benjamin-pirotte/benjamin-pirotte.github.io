import Header from '@/components/Header'
import AvatarChat from '@/components/AvatarChat'
import BlogPreview from '@/components/BlogPreview'
import RotatingHeadline from '@/components/RotatingHeadline'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <RotatingHeadline />
              <p className="text-gray-500 leading-relaxed text-base">
                10+ years building software;<br/> from early chaos to enterprise scale.
              </p>
            </div>
            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm">
                <AvatarChat />
              </div>
            </div>
          </div>
        </section>

        {/* Blog preview */}
        <BlogPreview />
      </main>
    </>
  )
}
