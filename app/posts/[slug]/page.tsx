import Header from '@/components/Header';
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {};
  }

  return {
    title: `${post.title} - Essays`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-2xl mx-auto px-4 pb-16">
        {/* Back Link */}
        <Link href="/" className="text-gray-600 hover:text-black transition text-sm">
          ← Back
        </Link>

        {/* Post Header */}
        <article className="mt-8">
          <h1 className="text-4xl font-bold text-black mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.category}</span>
          </div>

          {/* Post Content */}
          <div className="prose prose-sm max-w-none mb-16">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-800 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                {previousPost ? (
                  <Link href={`/posts/${previousPost.slug}`} className="block group">
                    <span className="text-sm text-gray-500 group-hover:text-gray-700">← Previous</span>
                    <h3 className="text-lg font-semibold text-black group-hover:text-gray-600 transition mt-1">
                      {previousPost.title}
                    </h3>
                  </Link>
                ) : (
                  <div className="text-sm text-gray-400">No previous post</div>
                )}
              </div>
              <div className="text-right">
                {nextPost ? (
                  <Link href={`/posts/${nextPost.slug}`} className="block group">
                    <span className="text-sm text-gray-500 group-hover:text-gray-700">Next →</span>
                    <h3 className="text-lg font-semibold text-black group-hover:text-gray-600 transition mt-1">
                      {nextPost.title}
                    </h3>
                  </Link>
                ) : (
                  <div className="text-sm text-gray-400">No next post</div>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
