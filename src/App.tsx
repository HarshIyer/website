import "./App.css";
// import Experiences from "./components/cards/Experiences";
import LatestProjectCard from "./components/cards/LatestProjectCard";
import ProfileCard from "./components/cards/ProfileCard";
import Navbar from "./components/Navbar";

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
              title="Blag."
              description="An open source Blogging platform."
            />
          </div>
          {/* <div>
            <Experiences />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
