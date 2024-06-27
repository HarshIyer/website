import { useInView } from "framer-motion";
import { useRef } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  progress: number;
  github: string;
  website: string;
};
import { FaGithub } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import ProgressBar from "./ProgressBar";
const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, tags, progress, github, website } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`bg-[#0D0D0D] flex flex-col text-white mx-10 xl:mx-80 p-12 my-10 rounded-xl shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]`}
    >
      <div className="flex flex-row justify-between">
        <h1
          className={
            `text-3xl text-[#00f2b8] font-extrabold` +
            (isInView ? " reveal-animation" : "")
          }
        >
          {title}
        </h1>
        <div>
          <button
            className={isInView ? " text-fade" : ""}
            onClick={() => window.open(github, "_blank")}
          >
            <FaGithub
              size={24}
              className="mr-2 hover:text-[#00f2b8] transition-all"
            />
          </button>

          <button
            className={isInView ? " text-fade" : ""}
            onClick={() => window.open(website, "_blank")}
          >
            <RxArrowTopRight
              size={24}
              className="hover:text-[#00f2b8] transition-all"
            />
          </button>
        </div>
      </div>
      <div className={isInView ? " text-fade" : ""}>
        <div>
          <p className="text-[#B7B7B7] my-2 md:text-lg">{description}</p>
        </div>
        <div className="flex flex-col my-2 md:my-0 md:flex-row justify-between">
          <div className="flex flex-row overflow-scroll items-center sm:flex-row my-4">
            {tags.map((tag) => (
              <span className="bg-[#424242] p-2 px-4 font-semibold text-sm md:text-lg mr-4 rounded-lg hover:cursor-pointer hover:bg-[#808080] transition-all">
                {tag}
              </span>
            ))}
          </div>
          <div className="w-[200px] mt-auto">
            <ProgressBar progress={progress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
