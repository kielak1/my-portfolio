const projects = [
    { title: "Ticket System", description: "CRUD app w React + Spring", link: "#" },
    { title: "AI SQL Generator", description: "Model AI do generowania zapytań ORM", link: "#" },
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
              <a href={project.link} className="text-blue-400 hover:underline">Zobacz więcej</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  