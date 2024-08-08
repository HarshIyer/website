import "./App.css";
// import Experiences from "./components/cards/Experiences";
import LatestProjectCard from "./components/cards/LatestProjectCard";
import ProfileCard from "./components/cards/ProfileCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ExperiencesCard from "./components/cards/ExperiencesCard";
import Experiences from "./components/cards/Experiences";
import { useEffect } from "react";

export const VitepressWrapper: React.FC = () => {
  useEffect(() => {
    window.location.href = "/blog/index.html";
  }, []);

  return null;
};

function App() {
  return (
    <div className="bg-black overflow-auto  h-screen">
      <div className="flex flex-col lg:ml-48">
        <Navbar />
        <div className="p-4 flex flex-col">
          <div>
            <ProfileCard />
          </div>
          <div className="mx-12">
            <LatestProjectCard
              title="Foursight"
              description="An open source trading and analysis platform for the Indian Stock Market."
            />
          </div>
        </div>
      </div>
      <div className="md:mt-96 w-fit green-colored text-3xl font-extrabold ml-8 text-center md:ml-[15%] mt-8">
        <Experiences />
      </div>{" "}
      <div className={`flex justify-center my-12 mb-48`}>
        <ExperiencesCard />
      </div>
      <div className="footer flex justify-center text-white">
        <Footer />
      </div>
    </div>
  );
}

export default App;
