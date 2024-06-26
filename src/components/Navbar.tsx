import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-6 md:mt-16 flex md:block mx-4 justify-center ">
      <div className="md:bg-[#0D0D0D] rounded-3xl p-3 w-fit">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-2 md:mb-0 flex flex-row items-center">
            <img
              src="src/assets/Logo.png"
              alt="logo"
              className="ml-4 w-12 h-12"
            />
            <h1 className="text-xl text-white font-black ml-2 md:ml-6 md:mr-16 items-center">
              Proximus
            </h1>
          </div>
          <div className="flex flex-row ml-auto items-center">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="navbar-item "
            >
              /home
            </button>
            <button
              onClick={() => {
                navigate("/projects");
              }}
              className="navbar-item"
            >
              /projects
            </button>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="navbar-item"
            >
              /contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
