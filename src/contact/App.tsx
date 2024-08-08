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
        <div>
          <div className="md:ml-[15%] mx-8 my-8 text-xl font-semibold green-colored">
            <p>My PGP key</p>
          </div>
          <div className="  ">
            <pre className="overflow-x-scroll md:ml-[20%] bg-[#575757] mx-8 text-white  rounded-lg p-2  mt-4">
              {`-----BEGIN PGP PUBLIC KEY BLOCK-----

              mDMEZrUQLRYJKwYBBAHaRw8BAQdAmVmtWaBxs+cSZfV5NjESlG3Oduy99n0/HG+3
              E7D5gHa0HXByb3hpbXVzIDxoZWxsb0BoYXJzaGl5ZXIubWU+iJkEExYKAEEWIQQf
              zOifLLzbMfPucqxR1Ahykd6HYQUCZrUQLQIbAwUJBaOagAULCQgHAgIiAgYVCgkI
              CwIEFgIDAQIeBwIXgAAKCRBR1Ahykd6HYcVJAP46aKr54SYAxzJ6LGZrJysqBsnH
              BaU6Eywh1jpLGF6otQD+KSgQCHl1GvR+8agAadOGcE/8Pv18+GY6uhkD+WKfKAO4
              OARmtRAtEgorBgEEAZdVAQUBAQdA5EmbGbCQKFgWmzmUk+S9oVuk2Y916rbO6Y/3
              eYewligDAQgHiH4EGBYKACYWIQQfzOifLLzbMfPucqxR1Ahykd6HYQUCZrUQLQIb
              DAUJBaOagAAKCRBR1Ahykd6HYWaXAP95XVhlsWNAfvWi9fUY/MzTba02QM2/AkJP
              Wl0tZByHCQEApl6Jjx6X9WeQf/F91g/bwRmWYV2DE6TmALQgnNhKdQM=
              =QSzq

-----END PGP PUBLIC KEY BLOCK-----`}
            </pre>
          </div>
          <p className="text-white md:mx-[15%] mx-8 my-4">
            {" "}
            Recipient: <span className="green-colored">proximus</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
