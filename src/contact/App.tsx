import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-black overflow-auto bg-[#000000] h-screen">
      <div className="flex flex-col lg:ml-48">
        <Navbar />
      </div>
      <div>
        <h1
          className={
            `w-fit green-colored text-3xl font-extrabold ml-8 text-center md:ml-[15%] mt-8` +
            (isInView ? " reveal-animation" : "")
          }
        >
          Contact
        </h1>
        <div className={`flex flex-col` + isInView ? " text-fade" : ""}>
          <p className="text-white text-xl font-semibold mx-8 md:ml-[20%] mt-8">
            You can send me an email at{" "}
            <span className="green-colored">hello at harshiyer dot me</span>
          </p>
          <div className="flex flex-row items-center justify-center md:justify-start md:items-start md:flex-row">
            <button className="bg-[#575757] text-white font-semibold rounded-lg p-2 md:ml-[20%] mt-4 hover:bg-[#696969]">
              <a
                href="https://www.github.com/HarshIyer"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row justify-center items-center"
              >
                <FaGithub className="h-6 w-6" />
                <p className="ml-2 hidden md:block"> Github</p>
              </a>
            </button>
            <button className="bg-[#575757] text-white font-semibold rounded-lg p-2 ml-4 mt-4 hover:bg-[#696969]">
              <a
                href="https://www.linkedin.com/in/harshiyer"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row justify-center items-center"
              >
                <FaLinkedin className="h-6 w-6" />{" "}
                <p className="ml-2 hidden md:block"> Linkedin</p>
              </a>
            </button>
            <button className="bg-[#575757] text-white font-semibold rounded-lg p-2 ml-4 mt-4 hover:bg-[#696969]">
              <a
                href="https://tryhackme.com/p/proximuz"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row justify-center items-center"
              >
                <SiTryhackme className="h-6 w-6" />{" "}
                <p className="ml-2 hidden md:block"> TryHackMe</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
