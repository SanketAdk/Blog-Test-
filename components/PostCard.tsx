import Link from 'next/link';
import { Post, formatDate } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="py-8 border-b border-gray-200 dark:border-gray-800 last:border-0">
      <Link href={`/posts/${post.slug}`}>
        <h3 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition mb-3">
          {post.title}
        </h3>
      </Link>
      <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
        {formatDate(post.date)} • {post.category}
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
        {post.excerpt}
      </p>
    </article>
  );
}
