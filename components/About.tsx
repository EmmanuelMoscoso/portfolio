export default function About() {
  return (
    <section id="about" className="min-h-screen pt-24 md:pt-32 w-full max-w-5xl mx-auto px-6 flex flex-col justify-center">
      
      <h3 className="text-2xl md:text-4xl font-bold text-light-text mb-8 md:mb-12 flex items-center tracking-tight w-full">
        <span className="text-accents font-mono text-lg md:text-xl font-normal mr-3 md:mr-4">01.</span> 
        Sobre mí
        <div className="h-[1px] bg-gray-olive flex-grow ml-4 md:ml-6"></div>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 text-gray-200 text-base md:text-lg leading-relaxed w-full">
        
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

        <div className="md:col-span-2 space-y-8 md:space-y-10 w-full">
          
          <div className="w-full">
            <h4 className="text-light-text font-bold mb-4 font-mono text-sm tracking-widest uppercase">
              Tecnologías
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-xs md:text-sm text-gray-200">
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> Next.js</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> Python</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> React Native</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> TypeScript</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> AWS</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> Java</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> SQL</li>
            </ul>
          </div>

          <div className="w-full">
            <h4 className="text-light-text font-bold mb-4 font-mono text-sm tracking-widest uppercase">
              Habilidades
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3 font-mono text-xs md:text-sm text-gray-200">
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> Metodologías Ágiles</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> Automatización</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> Edición de imágenes</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> Edición de video</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> Diseño gráfico</li>
              <li className="flex items-center gap-2"><span className="text-accents">▹</span> Mantenimiento hardware</li>
            </ul>
          </div>

          <div className="w-full">
            <h4 className="text-light-text font-bold mb-4 font-mono text-sm tracking-widest uppercase">
              Idiomas
            </h4>
            <ul className="space-y-3 text-xs md:text-sm text-gray-200 font-mono">
              <li className="flex justify-between border-b border-slate-700/50 pb-1">
                <span>Español</span>
                <span className="text-gray-400">Nativo</span>
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