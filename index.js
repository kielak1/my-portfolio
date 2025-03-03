import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold">Cześć, jestem [Twoje Imię]</h1>
      <p className="text-lg text-gray-400 mt-2">Full Stack Developer | Python & React</p>
      <div className="mt-6">
        <Link href="/about">
          <a className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
            O mnie
          </a>
        </Link>
        <Link href="/projects">
          <a className="ml-4 px-6 py-3 bg-gray-700 hover:bg-gray-500 text-white rounded-lg">
            Projekty
          </a>
        </Link>
      </div>
    </div>
  );
}
