import Header from '@/components/Header';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/posts';

export const metadata = {
  title: 'Archive - Essays',
  description: 'All essays and articles',
};

export default function ArchivePage() {
  const allPosts = getAllPosts();
  
  // Group posts by year
  const postsByYear: { [key: string]: typeof allPosts } = {};
  
  allPosts.forEach(post => {
    const year = new Date(post.date).getFullYear().toString();
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push(post);
  });

  const years = Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-2xl mx-auto px-4 pb-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black mb-4">All Essays</h1>
          <p className="text-gray-600">
            {allPosts.length} essays published
          </p>
        </div>

        {years.map(year => (
          <section key={year} className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6">{year}</h2>
            <ul className="space-y-4">
              {postsByYear[year].map(post => (
                <li key={post.id}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="group flex justify-between items-start hover:opacity-70 transition"
                  >
                    <span className="text-lg text-black group-hover:text-gray-600">
                      {post.title}
                    </span>
                    <span className="text-sm text-gray-500 ml-4 flex-shrink-0">
                      {formatDate(post.date)}
                    </span>
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{post.category}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {allPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No essays yet. Check back soon!</p>
          </div>
        )}
      </main>
    </div>
  );
}
