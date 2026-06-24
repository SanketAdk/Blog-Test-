import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-8 mb-12">
      <div className="max-w-2xl mx-auto px-4">
        <Link href="/" className="text-4xl font-bold text-black hover:opacity-70 transition">
          Essays
        </Link>
        <p className="text-gray-600 mt-2">Thoughts on writing and ideas</p>
      </div>
    </header>
  );
}
