import { useRef } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { useInView } from "framer-motion";

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-black overflow-auto bg-[#000000] h-screen" ref={ref}>
      <div className="flex flex-col lg:ml-48">
        <Navbar />
      </div>
      <div>
        <h1
          className={
            `green-colored text-3xl font-extrabold  ml-[15%] mt-8 w-fit` +
            (isInView ? " reveal-animation" : "")
          }
        >
          Projects
        </h1>
      </div>
      <div>
        <ProjectCard
          title="Blag."
          description="An open source Blogging platform."
          tags={["NextJS", "Cloudflare", "Redux", "SSG"]}
          github="https://www.github.com/HarshIyer/Blag"
          progress={95}
          website="https://blag.harshiyer.me"
        />

        <ProjectCard
          title="Port0"
          description="The authentication service built on Oauth2 standards at the center of IIITK.in"
          tags={["NextJS", "Crypto", "0Auth", "Cloudflare", "Redux"]}
          github="https://www.github.com/iiitk-in/port0"
          progress={80}
          website="https://port0.iiitk.in"
        />

        <ProjectCard
          title="IIITK.in"
          description="IIITK's student run project hosting and authentication service"
          tags={["NextJS", "Cloudflare", "Redux", "D1", "Docker", "Kubernetes"]}
          github="https://www.github.com/iiitk-in/"
          progress={60}
          website="https://iiitk.in"
        />
        <ProjectCard
          title="This website"
          description="Made with Vite, deployed on Cloudflare Pages"
          tags={["Vite", "Cloudflare", "Tailwind", "Framer"]}
          github="https://www.github.com/HarshIyer/website"
          progress={90}
          website="https://harshiyer.me"
        />
        <ProjectCard
          title="Attendance Helper"
          description="An attendance app suited to aid students in analysing their current and future attendance with insights."
          tags={["NextJS", "Cloudflare", "Docker", "Azure"]}
          github="https://github.com/HarshIyer/attendance-helper"
          progress={100}
          website="https://attendance.harshiyer.me"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
