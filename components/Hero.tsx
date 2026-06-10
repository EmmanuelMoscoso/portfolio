import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto px-6">
      
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        <div className="shrink-0 relative">
          <Image
            src="/assets/hero.jpg"
            width={250}
            height={250}
            alt="Emmanuel Moscoso - Hero Image"
            className="rounded-full border-gray-olive border-4"
            priority
          />
        </div>

        <div className="flex flex-col mt-8 md:mt-0">
          <p className=" text-sm md:text-base text-accents mb-4">
            ¡Hola! mi nombre es
          </p>
          
          <h1 className=" text-5xl md:text-6xl font-bold tracking-tight text-light-text mb-2">
            Emmanuel Moscoso
          </h1>
          
          <h2 className=" text-3xl md:text-3xl font-bold text-gray-olive mb-6 tracking-tight">
            Ingeniero de Software
          </h2>
          
          <p className=" text-white text-lg max-w-xl leading-relaxed mb-8 text-justify">
            Soy un estudiante de Ingeniería de Software buscando realizar mis prácticas profesionales. Me gusta transformar ideas en aplicaciones web y móviles utilizando React, Next.js y Python, integrando desde el frontend hasta la base de datos.
          </p>
        </div>

      </div>
    </section>
  );
}