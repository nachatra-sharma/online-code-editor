import PlaygroundCard from "./PlaygroundCard";
import { useContext } from "react";
import { PlaygroundContext } from "../utils/PlaygroundProvider";
import { modalConstants, ModalContext } from "../utils/ModalProvider";

const PlaygroundFolder = () => {
  const { folders, deleteFolder } = useContext(PlaygroundContext);
  const { openModal, setModalPayload } = useContext(ModalContext);

  const openUpdateFolderModal = (id) => {
    setModalPayload(id);
    openModal(modalConstants["update-folder"]);
  };

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
                <span
                  className="material-icons cursor-pointer"
                  onClick={() => {
                    const id = data.id;
                    deleteFolder(id);
                  }}
                >
                  delete
                </span>
                <span
                  className="material-icons cursor-pointer"
                  onClick={() => {
                    const id = data.id;
                    openUpdateFolderModal(id);
                  }}
                >
                  edit
                </span>
                <button className="flex flex-row items-center gap-2 cursor-pointer">
                  <span className="material-icons text-[1.2rem]">add</span>
                  <span className="text-[1rem]">New Playground</span>
                </button>
              </div>
            </div>
            {/* playground folders list are present here */}
            <div className="flex w-[95%] mx-auto justify-between flex-wrap py-5">
              {data?.files.map((value) => (
                <PlaygroundCard
                  folderId={data.id}
                  key={value.id}
                  value={value}
                ></PlaygroundCard>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlaygroundFolder;
