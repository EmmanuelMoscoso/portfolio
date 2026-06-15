import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return(
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-dark-background">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}