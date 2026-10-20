const VedioTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] absolute text-white px-24 bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-lg w-2/4">{overview}</p>
      <div className="mt-4">
        <button className="py-2 px-6 bg-gray-500 rounded-md mr-2 hover:opacity-80">
          Play
        </button>
        <button className="py-2 px-6 bg-gray-500  rounded-md">More Info</button>
      </div>
    </div>
  );
};

export default VedioTitle;
