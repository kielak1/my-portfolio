export default function About() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold">O mnie</h1>
        <p className="mt-4 text-gray-400 max-w-2xl text-center">
          Jestem Full Stack Developerem z doświadczeniem w Python (Django), React i Spring. 
          Tworzę wydajne aplikacje webowe oraz pracuję nad AI i modelami językowymi.
        </p>
        <a 
          href="/cv.pdf" 
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
        >
          Pobierz CV
        </a>
      </div>
    );
  }
  