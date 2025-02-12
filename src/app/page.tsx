import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import SideLinks from "@/components/SideLinks";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Header />

      {/* left container */}
      <div className="flex-[0.1] hidden md:flex">
        <SideLinks />
      </div>

      {/* main container */}
      <div className="md:flex-[0.8] w-full">
        <Landing />
        <AboutMe />
        <Projects />
        <Contact />
        <div className="mb-0.5 text-center font-mono text-gray-200/80">
          {"Designed & Created by Yusuf Akçay"}
        </div>
      </div>
      {/* right container */}
      <div className="flex-[0.1] hidden md:flex">{/* <SideNav /> */}</div>
    </div>
  );
}
