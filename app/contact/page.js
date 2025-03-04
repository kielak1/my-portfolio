export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold">Kontakt</h1>
        <p className="mt-4 text-gray-400">Możesz mnie znaleźć tutaj:</p>
        <div className="mt-4">
          <a href="https://github.com/kielak1" className="text-blue-400 hover:underline">
            GitHub
          </a> | 
          <a href="https://www.linkedin.com/in/tadeusz-kielak-b2aa7b/" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
  