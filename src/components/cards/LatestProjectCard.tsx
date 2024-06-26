import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
type propsType = {
  title: string;
  description: string;
};
const LatestProjectCard = (props: propsType) => {
  const navigate = useNavigate();
  const shadow =
    "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { title, description } = props;
  return (
    <div
      ref={ref}
      onClick={() => {
        navigate("/projects");
      }}
      className={
        `${shadow} hover:cursor-pointer  flex flex-col bg-[#0D0D0D] w-fit p-12   mt-8 rounded-2xl` +
        (isInView ? " text-fade" : "")
      }
    >
      <h1 className=" green-colored font-extrabold text-3xl">Latest Project</h1>
      <h3 className="font-semibold text-xl mt-2 text-white">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};
export default LatestProjectCard;
