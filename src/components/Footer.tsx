import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="hidden md:block flex flex-row text-[#00F2B8] mb-2">
      <button
        className="mx-2 "
        onClick={() => window.open("mailto:hello@harshiyer.me", "_blank")}
      >
        <IoIosMail size={30} />
      </button>
      <button className="mx-2">
        <FaGithub
          onClick={() =>
            window.open("https://www.github.com/HarshIyer", "_blank")
          }
          size={30}
        />
      </button>
      <button
        onClick={() =>
          window.open("https://www.linkedin.com/in/harshiyer", "_blank")
        }
        className="mx-2"
      >
        <FaLinkedin size={30} />
      </button>
    </div>
  );
};
export default Footer;
