const projects = [
  {
    title: "AvanTIc",
    description: "System wspierający proces akceptacji inicjatyw informatycznych w Biurze Informatyki Górnictwa Naftowego i Gazownictwa w ORLEN S.A.",
    link: "https://aprobo.kielak.com/",
    repo: "https://github.com/kielak1/aprobo",
    production: true,
    complexity: "Zaawansowana",
    technologies: ["Python", "Django", "Pytorch", "PostgreSQL", "LLM"],
  },
  {
    title: "Bankomator",
    description: "System do monitorowania bankomatów w PKO BP",
    link: "",
    repo: "",
    production: true,
    complexity: "Duża",
    technologies: ["SMTP", "C"],
  },
  {
    title: "KSI",
    description: "System wspierający realizację umowy utrzymaniowej na Kompleksowy System Informatyczny ZUS",
    link: "",
    repo: "",
    production: true,
    complexity: "Średnia",
    technologies: ["VBA"],
  },
  {
    title: "Adresator",
    description: "System do zarządzania adresacją IP w PKO BP",
    link: "",
    repo: "",
    production: true,
    complexity: "Średnia",
    technologies: ["SMTP", "C"],
  },
  {
    title: "Monitorwanie sesji SNA",
    description: "System monitorujący stan sesji SNA w PKO BP",
    link: "",
    repo: "",
    production: true,
    complexity: "Średnia",
    technologies: ["SMTP", "C"],
  },
  {
    title: "Ticket System",
    description: "CRUD app w React + Spring",
    link: "https://reactspr.kielak.com/",
    repo: "https://github.com/kielak1/reactspr",
    production: false,
    complexity: "Mała",
    technologies: ["React", "Spring", "PostgreSQL"],
  },

];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center">Moje Projekty</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
            {project.link && <a href={project.link} className="text-blue-400 hover:underline">Zobacz więcej</a>}
            {project.repo && <p><a href={project.repo} className="text-green-400 hover:underline">Repozytorium</a></p>}
            <p>Status: {project.production ? "Wykorzystywany produkcyjnie" : "Projekt testowy"}</p>
            <p>Złożoność: {project.complexity}</p>
            {project.technologies.length > 0 && (
              <p>Technologie: {project.technologies.join(", ")}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
