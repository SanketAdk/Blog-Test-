import Link from 'next/link';
import { Post, formatDate } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="py-6 border-b border-gray-100 last:border-0">
      <Link href={`/posts/${post.slug}`}>
        <h3 className="text-2xl font-semibold text-black hover:text-gray-600 transition mb-2">
          {post.title}
        </h3>
      </Link>
      <p className="text-sm text-gray-500 mb-3">
        {formatDate(post.date)} • {post.category}
      </p>
      <p className="text-gray-700 leading-relaxed">
        {post.excerpt}
      </p>
    </article>
  );
}
