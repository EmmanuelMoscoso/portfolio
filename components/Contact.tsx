export default function Contact() {
  return (
    <section id="contact" className="min-h-[70vh] flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-6 text-center mb-24">
      
      <p className="font-mono text-accents text-sm md:text-base mb-4 tracking-widest">
        03. ¿Qué sigue?
      </p>
      
      <h2 className="text-4xl md:text-6xl font-bold text-slate-200 mb-6 tracking-tight">
        Ponte en contacto
      </h2>
      
      <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 md:mb-12 w-full">
        Actualmente estoy en búsqueda de una oportunidad para realizar mis prácticas profesionales. Si tienes un espacio en tu equipo de desarrollo o simplemente quieres conectar, mi bandeja de entrada siempre está abierta.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        
        <a
          href="mailto:emmanuel.moscoso.a@gmail.com"
          className="px-8 py-4 border border-accents text-accents font-mono text-sm rounded hover:bg-olive transition-colors w-full sm:w-auto"
        >
          Envíame un correo
        </a>

        <a
          href="https://www.linkedin.com/in/emmanuel-moscoso/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-4 border border-slate-700 text-slate-300 font-mono text-sm rounded hover:border-slate-300 hover:text-white transition-all flex items-center justify-center gap-3 w-full sm:w-auto group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:text-light-accents transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn
        </a>

        <a
          href="https://github.com/EmmanuelMoscoso"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-4 border border-slate-700 text-slate-300 font-mono text-sm rounded hover:border-slate-300 hover:text-white transition-all flex items-center justify-center gap-3 w-full sm:w-auto group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:text-light-accents transition-colors"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub
        </a>
        
      </div>
    </section>
  );
}