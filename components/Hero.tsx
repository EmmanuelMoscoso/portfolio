import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen w-full max-w-5xl mx-auto px-6">
      
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
        
        <div className="shrink-0 relative">
          <Image
            src="/assets/hero.jpg"
            width={250}
            height={250}
            alt="Emmanuel Moscoso - Hero Image"
            className="rounded-full border-gray-olive border-4 w-48 h-48 md:w-[250px] md:h-[250px]"
            priority
          />
        </div>

        <div className="flex flex-col mt-4 md:mt-0 w-full">
          <p className="text-sm md:text-base text-accents mb-3 md:mb-4">
            ¡Hola! mi nombre es
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-light-text mb-2">
            Emmanuel Moscoso
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-olive mb-6 tracking-tight">
            Ingeniero de Software
          </h2>
          
          <p className="text-white text-base md:text-lg w-full max-w-xl leading-relaxed mb-8 text-justify">
            Soy un estudiante de Ingeniería de Software buscando realizar mis prácticas profesionales. Me gusta transformar ideas en aplicaciones web y móviles utilizando React, Next.js y Python, integrando desde el frontend hasta la base de datos.
          </p>
        </div>

      </div>
    </section>
  );
}