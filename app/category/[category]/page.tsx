import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import { getAllPosts, getAllCategories, getPostsByCategory } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  
  return {
    title: `${categoryName} - Essays`,
    description: `Essays in ${categoryName}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categories = getAllCategories();
  
  // Find the actual category name (case-insensitive)
  const actualCategory = categories.find(
    c => c.toLowerCase() === category.toLowerCase()
  );

  if (!actualCategory) {
    notFound();
  }

  const posts = getPostsByCategory(actualCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-2xl mx-auto px-4 pb-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-gray-600 hover:text-black transition text-sm">
            ← Back
          </Link>
          <h1 className="text-3xl font-bold text-black mt-4 mb-2">{actualCategory}</h1>
          <p className="text-gray-600">
            {posts.length} {posts.length === 1 ? 'essay' : 'essays'}
          </p>
        </div>

        {/* Posts */}
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No essays in this category yet.</p>
          </div>
        )}
      </main>
    </div>
  );
}
