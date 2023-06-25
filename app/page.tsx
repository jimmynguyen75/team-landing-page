import { Experience, PageInfo, Project, Skill, Social } from "@/typings";

import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import { GetStaticProps } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo?: PageInfo;
  experiences?: Experience[];
  skills?: Skill[];
  projects?: Project[];
  socials?: Social[];
};

export default async function () {
  const socials: Social[] = await fetchSocials();
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20">
      <Header socials={socials}/>
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter hover: grayscale-0 cursor-pointer"
              src="https://img.freepik.com/free-vector/cute-cat-super-hero-cartoon-illustration-animal-hero-concept-isolated-flat-cartoon_138676-2296.jpg?w=1800&t=st=1687081359~exp=1687081959~hmac=1db7274b04663b0dc4ad5b623218b388a5383e36af2a6470e23ee4e69436e3a4"
              alt=""
            />
          </div>
        </footer>
      </a>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   console.log("getStaticProps()");
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperience();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials,
//     },
//     revalidate: 10,
//   };
// };
