import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import { getAllPosts, getFeaturedPosts, getAllCategories } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();
  const recentPosts = allPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-16">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-8 uppercase tracking-tight">
              Featured
            </h2>
            <div className="space-y-12">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-8 uppercase tracking-tight">
            Recent Essays
          </h2>
          <div className="space-y-12">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Archive Link */}
        <section className="py-8 border-t border-gray-200 dark:border-gray-800">
          <Link href="/archive" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
            ← View all {allPosts.length} essays
          </Link>
        </section>

        {/* Categories */}
        {categories.length > 0 && (
          <section className="py-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">
              Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm"
                >
                  {category}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
