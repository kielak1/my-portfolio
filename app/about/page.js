export default function About() {
  return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
          <h1 className="text-3xl font-bold">O mnie</h1>
          <p className="mt-4 text-gray-400 max-w-2xl text-center">
              Jestem doświadczonym Full Stack Developerem i menedżerem IT z szeroką wiedzą w zakresie budowy i wdrażania aplikacji webowych oraz infrastruktury IT. 
              Specjalizuję się w rozwiązaniach AI, w tym parametryzacji i wdrażaniu modeli LLM, budowie własnych systemów AI oraz ich integracji z aplikacjami.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8">Specjalizacje</h2>
          <ul className="mt-4 text-gray-400 max-w-2xl text-center space-y-2">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Backend: Python (Django, FastAPI), Java (Spring), PostgreSQL</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Frontend: React, JavaScript, HTML/CSS, Bootstrap</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Automatyzacja i testowanie: Selenium, Robot Framework</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> AI i modele językowe: RAG, trening i wdrażanie modeli AI</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Optymalizacja aplikacji: analiza logów, profilowanie kodu, tuning zapytań SQL</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Infrastruktura: Nginx, Gunicorn, Celery, Linux (RHEL, Rocky Linux)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Doświadczenie</h2>
          <ul className="mt-4 text-gray-400 max-w-2xl text-center space-y-2">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Obecnie pracuję w ORLEN S.A., wcześniej w PGNiG S.A. oraz ZUS</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Realizowałem projekty dla sektora bankowego i telekomunikacyjnego</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Tworzyłem systemy monitorowania, zarządzania adresacją IP, akceptacji inicjatyw IT</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Języki i umiejętności miękkie</h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-center">
              Posługuję się angielskim na poziomie B2 oraz hiszpańskim na poziomie B1. 
              Mam doświadczenie w analizie biznesowej, zarządzaniu projektami i pracy zespołowej. 
              Jestem zorientowany na cel i potrafię skutecznie rozwiązywać problemy.
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
