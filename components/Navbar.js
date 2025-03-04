"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex justify-center space-x-4">
      <Link href="/" className="hover:text-blue-400">Home</Link>
      <Link href="/about" className="hover:text-blue-400">O mnie</Link>
      <Link href="/projects" className="hover:text-blue-400">Projekty</Link>
      <Link href="/contact" className="hover:text-blue-400">Kontakt</Link>
    </nav>
  );
}
