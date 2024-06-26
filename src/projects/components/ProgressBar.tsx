const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="relative w-full h-2 bg-[#424242] rounded-lg">
      <div
        className="absolute h-full bg-[#00f2b8] rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
