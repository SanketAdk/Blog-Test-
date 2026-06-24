import posts from '@/data/posts.json';

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  featured?: boolean;
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter(post => post.featured).slice(0, 3);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(post => post.category === category);
}

export function getAllCategories(): string[] {
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories).sort();
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
