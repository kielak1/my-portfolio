import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Cześć, jestem <span className="text-blue-400">Tadeusz</span>
      </h1>
      <p className="text-lg text-gray-300 mt-4">
        Full Stack Developer | C++ | Python & React | Django | PostgreSql |
        Pytorch | LLM | VBA | SMTP | C | Java | Spring | Robot Framework | CSS |
        Prolog
      </p>
      <div className="mt-6">
        <Link
          href="/about"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-700 transition-all text-white rounded-lg text-lg shadow-lg"
        >
          O mnie
        </Link>
        <Link
          href="/projects"
          className="ml-4 px-6 py-3 bg-gray-700 hover:bg-gray-500 transition-all text-white rounded-lg text-lg shadow-lg"
        >
          Projekty
        </Link>
      </div>
    </div>
  );
}
