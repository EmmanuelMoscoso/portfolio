export default function Projects() {

  type Project = {
    title: string;
    description: string;
    tech: string[];
    links: {
      github: string;
      external?: string;
    };
  };

  const projectList: Project[] = [
    {
      title: "Orvia",
      description: "Aplicación móvil y plataforma para la gestión eficiente de citas médicas. Mi parte del desarrollo se centró en la implementación del frontend y la integración de APIs para optimizar la coordinación entre pacientes y profesionales de la salud.",
      tech: ["React Native", "Next.js", "AWS", "PostgreSQL"],
      links: { github: "https://github.com/orgs/ORVIA-Project/repositories" }
    },
    {
      title: "Plataforma Web CIICCTE",
      description: "Plataforma web institucional desarrollada como parte de mi servicio social para el laboratorio de investigación CIICCTE, enfocada en tener un espacio para la información de proyectos e integrantes.",
      tech: ["Angular", "Python", "MongoDB"],
      links: { github: "https://github.com/CIICCTE/MainPage" }
    },
    {
      title: "Sistema distribuido con Docker y Kubernetes",
      description: "Arquitectura de microservicios basada en la intercomunicación de dos APIs. Contenerizada con Docker y orquestada mediante Kubernetes (Minikube) para asegurar escalabilidad, resiliencia y alta disponibilidad de los datos.",
      tech: ["Python", "MongoDB", "PostgresSQL", "Docker", "Minikube"],
      links: { github: "https://github.com/EmmanuelMoscoso/ProyectoFinal_SD" }
    },
    {
      title: "HydrAI",
      description: "Aplicación móvil inteligente para la gestión integral del consumo de agua. Desarrollada en un hackathon, integra monitoreo en tiempo real, alertas preventivas de fugas y un sistema de recomendaciones personalizadas para promover el ahorro del agua.",
      tech: ["React Native", "Python", "MongoDB"],
      links: { github: "https://github.com/EmmanuelMoscoso/HackatonFrontEnd" }
    },
];

  return (
    <section id="projects" className="min-h-screen pt-24 md:pt-32 w-full max-w-6xl mx-auto px-6 mb-24 md:mb-32">
      
      <h3 className="text-2xl md:text-4xl font-bold text-slate-200 mb-8 md:mb-12 flex items-center tracking-tight w-full">
        <span className="text-accents font-mono text-lg md:text-xl font-normal mr-3 md:mr-4">02.</span> 
        Proyectos destacados
        <div className="h-[1px] bg-gray-olive flex-grow ml-4 md:ml-6"></div>
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className="bg-olive p-6 md:p-8 rounded-md border hover:border-gray-olive hover:border-2 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group w-full"
          >
            <div>
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <div className="text-light-accents">
                  {/* Icon or visual element can go here */}
                </div>
                <div className="flex items-center gap-4 text-gray-olive">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="hover:text-light-accents transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  )}
                  {project.links.external && (
                    <a href={project.links.external} target="_blank" rel="noreferrer" className="hover:text-light-accents transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-light-accents mb-3 group-hover:text-light-text transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8 font-mono text-[11px] md:text-xs text-gray-olive group-hover:text-olive-300">
              {project.tech.map((techItem, i) => (
                <li key={i}>{techItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </section>
  );
}