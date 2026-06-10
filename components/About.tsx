export default function About() {
  return (
    <section id="about" className="min-h-screen pt-32 max-w-5xl mx-auto px-6 flex flex-col justify-center">
      
      <h3 className="text-3xl md:text-4xl font-bold text-light-text mb-12 flex items-center gap-4 tracking-tight">
        <span className="text-accents font-mono text-xl font-normal">01.</span> 
        Sobre mí
        <div className="h-[1px] bg-gray-olive w-48 md:w-4/6 ml-4"></div>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-gray-200 text-lg leading-relaxed ">
        
       <div className="md:col-span-3 space-y-6 text-justify">
        <p>
          Actualmente soy estudiante de Ingeniería de Software en la <strong className="text-accents font-normal">Universidad Autónoma de Querétaro</strong>, con fecha prevista de graduación para diciembre de 2026. Me motiva el desarrollo de software desde un enfoque muy práctico: disfruto construir programas y aplicaciones para resolver problemas reales. Si necesito una herramienta que no existe, la desarrollo yo mismo.
        </p>
        <p>
          Mi enfoque principal está en el ecosistema de React, desarrollando soluciones para web y dispositivos móviles. Además del desarrollo frontend, tengo experiencia en backend y ciencia de datos, creando e implementando APIs REST, administrando bases de datos y procesando conjuntos de datos para su análisis.
        </p>
        <p>
          Cuando no estoy escribiendo código, divido mi tiempo entre la lectura, jugar videojuegos, el voluntariado para el rescate y adopción de animales, el análisis histórico-crítico de literatura antigua y la reparación de hardware. 
        </p>
      </div>

        <div className="md:col-span-2 space-y-10">
          
          <div>
            <h4 className="text-light-text font-bold mb-4 font-mono text-sm tracking-widest uppercase">
              Tecnologías
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-sm text-gray-200">
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> Python
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> React Native
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> AWS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> Java
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> AWS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> SQL
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-light-text font-bold mb-4 font-mono text-sm tracking-widest uppercase">
              Habilidades
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-sm text-gray-200">
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> Metodologías Ágiles - SCRUM
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> Automatización de procesos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> Edición de imágenes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> Edición de video
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> Diseño gráfico
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accents">▹</span> Mantenimiento de hardware
              </li>
              
            </ul>
          </div>

          <div>
            <h4 className="text-light-text font-bold mb-4 font-mono text-sm tracking-widest uppercase">
              Idiomas
            </h4>
            <ul className="space-y-3 text-sm text-gray-200 font-mono">
              <li className="flex justify-between border-b border-slate-700/50 pb-1">
                <span>Español</span>
                <span className="text-gray-400  ">Nativo</span>
              </li>
              <li className="flex justify-between border-b border-slate-700/50 pb-1">
                <span>Inglés</span>
                <span className="text-gray-400">C2 (Bilingüe)</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}