import { useContext } from "react";
import logo from "../assets/logo.svg";
import { PlaygroundContext } from "../utils/PlaygroundProvider";
import { modalConstants, ModalContext } from "../utils/ModalProvider";

const PlaygroundCard = ({ value, folderId }) => {
  const { deleteFile } = useContext(PlaygroundContext);
  const { openModal, setModalPayload } = useContext(ModalContext);

  const openEditFileNameModal = (id, folderId) => {
    setModalPayload({ id, folderId });
    openModal(modalConstants["update-file"]);
  };
  return (
    <div className="flex justify-between px-5 py-3 rounded-sm w-[47%] shadow-[0_35px_60px_-6px_rgba(150,150,150,0.1),0_-35px_60px_-6px_rgba(150,150,150,0.1),5px_0_40px_-6px_rgba(150,150,150,0.1),-35px_0_60px_-6px_rgba(150,150,150,0.1)] mb-3">
      <div className="flex items-center">
        <img src={logo} className="w-[50px] h-[50px] rounded-full" alt="logo" />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <p className="text-sm tracking-wide">{value.title}</p>
        <p className="text-sm tracking-wide">Language: {value.language}</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <span
          className="material-icons cursor-pointer"
          onClick={() => deleteFile(value.id, folderId)}
        >
          delete
        </span>
        <span
          className="material-icons cursor-pointer"
          onClick={() => {
            openEditFileNameModal(value.id, folderId);
          }}
        >
          edit
        </span>
      </div>
    </div>
  );
};

export default PlaygroundCard;
