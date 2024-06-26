import { useInView } from "framer-motion";
import { useRef } from "react";

const ProfileCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shadow =
    "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]";
  return (
    <div
      ref={ref}
      className={`${shadow} flex flex-col bg-[#0D0D0D] w-fit p-12  mx-12 mt-8 rounded-2xl  lg:min-w-[700px] lg:max-w-[700px]`}
    >
      <h1
        className={
          `text-[#00F2B8] text-3xl leading-none font-extrabold ` +
          (isInView ? " reveal-animation" : "")
        }
      >
        Hi, I'm Harsh
      </h1>
      <div className={` ` + (isInView ? "text-fade" : "")}>
        <p className="md:text-lg text-[#BABABA] mt-2 font-bold ">
          a 2nd year student at IIIT Kottayam, majoring in CS.
        </p>
        <p className="md:text-lg text-[#9E9E9E] mt-2">
          I like Full Stack Development and Cyber Security.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
