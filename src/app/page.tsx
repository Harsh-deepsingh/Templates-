import HamburgerMenu from "@/sections/Hamburger";
import Hero from "@/sections/Hero";
import data from "../../data";
import Work from "@/sections/Work";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex-row flex justify-between items-start mb-14">
        <HamburgerMenu></HamburgerMenu>
        {/* <Navbar></Navbar> */}
      </div>
      <div className=" flex justify-center items-center">
        <div className="mt-4 w-10/12 sm:w-7/12 flex flex-col gap-40">
          <section id="home" className="h-full ">
            <Hero></Hero>
          </section>
          {data.Work.map((work) => work.title.length > 0).at(0) && (
            <section id="work" className="h-full  ">
              <Work></Work>
            </section>
          )}
          {data.projectData
            .map((projects) => projects.title.length > 0)
            .at(0) && (
            <section id="projects" className="h-full ">
              <Projects></Projects>
            </section>
          )}
          {data.aboutData.description.length ||
          data.aboutData.personalDetails.email ||
          data.aboutData.personalDetails.location.length > 0 ||
          data.aboutData.skills.map((skill) => skill.length).at(0) ? (
            <section id="about" className="h-full ">
              <About></About>
            </section>
          ) : null}
          {data.contact.Email.length ||
          data.contact.Github.length ||
          data.contact.LinkedIn.length ||
          data.contact.Twitter.length > 0 ? (
            <section id="contact" className="h-full ">
              <Contact></Contact>
            </section>
          ) : null}
        </div>
      </div>
    </>
  );
}
