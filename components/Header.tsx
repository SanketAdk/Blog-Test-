import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-8 mb-12">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <Link href="/" className="text-3xl sm:text-4xl font-bold text-black hover:opacity-70 transition">
          Emergent Thoughts
        </Link>
        <p className="text-gray-600 mt-2">Essays on ideas that matter</p>
      </div>
    </header>
  );
}
