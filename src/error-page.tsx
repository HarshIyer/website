import Navbar from "./components/Navbar";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <div className="flex flex-col lg:ml-48">
        <Navbar />
      </div>
      <p className="text-3xl text-white flex text-center justify-center items-center my-10 md:my-40">
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
}
