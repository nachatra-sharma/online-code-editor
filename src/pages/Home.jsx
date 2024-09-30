import PlaygroundFolder from "../components/PlaygroundFolder";
const Home = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] relative">
      {/* left component */}
      <div className="w-1/3 bg-[#222f3e] fixed bottom-0 top-0">
        <div className="flex justify-center items-center w-full h-full flex-col gap-4">
          <h1 className="text-[#ecf0f1] font-normal text-5xl tracking-wide">
            Code Editor
          </h1>
          <p className="text-[#ecf0f1] font-normal text-md tracking-wide">
            Code, Compile and Debug
          </p>
          <button className="bg-[#dce0e2] py-3 px-7 mt-5 rounded-full text-md tracking-wide flex items-center gap-3">
            <span>Create Playground</span>
            <span className="material-icons">add</span>
          </button>
        </div>
      </div>
      {/* right component */}
      <div className="w-2/3 absolute right-0">
        <div className="w-[95%] mx-auto py-4">
          {/* header */}
          <div className="flex justify-between items-center border-b-2 pb-5">
            <div>
              <h1 className="text-3xl font-bold">
                <span className="font-normal">My</span> Playground
              </h1>
            </div>
            <button className="flex flex-row items-center gap-2">
              <span className="material-icons text-[1.2rem]">add</span>
              <span className="text-[1rem]">New Folder</span>
            </button>
          </div>
          {/* folder */}
          <PlaygroundFolder></PlaygroundFolder>
        </div>
      </div>
    </div>
  );
};

export default Home;
