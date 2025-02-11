import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import SideLinks from "@/components/SideLinks";
import SideNav from "@/components/SideNav";

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
        {/* <Projects /> */}
      </div>
      {/* right container */}
      <div className="flex-[0.1] hidden md:flex">{/* <SideNav /> */}</div>
    </div>
  );
}
