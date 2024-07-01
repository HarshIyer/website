import { useInView } from "framer-motion";
import { useRef } from "react";

const ExperiencesCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const CTFs = [
    {
      title: "UIUCTF 2024",
      link: "https://2024.uiuc.tf/scoreboard",
      organizer: "SIGPwny, University of Illinois Urbana-Champaign (UIUC)",
      rank: "139/959",
      alias: "Placeholder",
    },
    {
      title: "ApoorvCTF 2024",
      link: "https://drive.google.com/file/d/10FNCLwwJXybiQ3dVTF7suzgPxBWG_yHu/view",
      organizer: "Indian Institute of Information Technology, Kottayam",
      rank: "25/470",
      alias: "harshiyer",
    },
    {
      title: "zCrypt CTF 2023",
      link: "https://www.zcrypt.cloud/",
      organizer: "zCrypt",
      rank: "11/45",
      alias: "harshiyer",
    },
  ];
  return (
    <div
      className={
        `text-white overflow-x-auto mx-4` + (isInView ? " text-fade" : "")
      }
      ref={ref}
    >
      <table
        className={`rounded-xl w-fit text-base md:text-xl text-start overflow-x-auto`}
      >
        {" "}
        <thead className="text-sm md:text-xl text-[#00f2b8] uppercase bg-[#0D0D0D]">
          <tr>
            <th className="px-6 py-3 text-start">CTF Name</th>
            <th className="px-6 py-3 text-start">Organizer</th>
            <th className="px-6 py-3 text-start">CTF Rank</th>
            <th className="px-6 py-3 text-start">CTF Alias</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {CTFs.map((ctf) => (
            <tr className="text-start text-sm md:text-xl border-b bg-[#111111] border-black">
              {" "}
              <td className="text-start px-6 py-4">
                {" "}
                <a href={ctf.link} className="text-start text-white">
                  {ctf.title}
                </a>
              </td>
              <td className="text-start px-6 py-4 text-white  ">
                {ctf.organizer}
              </td>
              <td className="text-start px-6 py-4 text-white">{ctf.rank}</td>
              <td className="text-start px-6 py-4 text-white">{ctf.alias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ExperiencesCard;
