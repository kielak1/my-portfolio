import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex justify-center space-x-4">
      <Link href="/"><a className="hover:text-blue-400">Home</a></Link>
      <Link href="/about"><a className="hover:text-blue-400">O mnie</a></Link>
      <Link href="/projects"><a className="hover:text-blue-400">Projekty</a></Link>
      <Link href="/contact"><a className="hover:text-blue-400">Kontakt</a></Link>
    </nav>
  );
}
