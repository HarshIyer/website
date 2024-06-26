import { useInView } from "framer-motion";
import { useRef } from "react";

const Experiences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <h1
        className={
          ` text-[#00f2b8] text-3xl mt-12 xl:mt-96 w-fit font-extrabold` +
          (isInView ? " reveal-animation" : "")
        }
      >
        Experiences
      </h1>
    </div>
  );
};
export default Experiences;
