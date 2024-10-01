import PlaygroundCard from "./PlaygroundCard";
import { useContext } from "react";
import { PlaygroundContext } from "../utils/PlaygroundProvider";

const PlaygroundFolder = () => {
  const { folders } = useContext(PlaygroundContext);

  return (
    <div>
      {/* create a playground nav */}
      {folders?.length !== 0 &&
        folders.map((data) => (
          <div key={data.id}>
            <div className="flex justify-between items-center border-b-2 pt-7 pb-4">
              <div className="flex gap-4">
                <span className="material-icons text-[#ffca29]">folder</span>
                <p>{data.title}</p>
              </div>
              <div className="flex gap-4">
                <span className="material-icons">delete</span>
                <span className="material-icons">edit</span>
                <button className="flex flex-row items-center gap-2">
                  <span className="material-icons text-[1.2rem]">add</span>
                  <span className="text-[1rem]">New Playground</span>
                </button>
              </div>
            </div>

            <div className="flex w-[95%] mx-auto justify-between flex-wrap py-5">
              {data?.files.map((value) => (
                <PlaygroundCard key={value.id} value={value}></PlaygroundCard>
              ))}
            </div>
          </div>
        ))}
      {/* playground folders list are present here */}
    </div>
  );
};

export default PlaygroundFolder;
