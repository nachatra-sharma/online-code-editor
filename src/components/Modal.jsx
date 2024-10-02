import { useContext } from "react";
import { ModalContext } from "../utils/ModalProvider";
import PlaygroundModal from "./PlaygroundModal";
import { modalConstants } from "../utils/ModalProvider";
import CreateFolderModal from "./CreateFolderModal";

const Modal = () => {
  const modalFeature = useContext(ModalContext);
  return (
    <>
      {modalFeature.activeModal === modalConstants["playground-modal"] && (
        <PlaygroundModal />
      )}
      {modalFeature.activeModal === modalConstants["create-folder"] && (
        <CreateFolderModal />
      )}
    </>
  );
};

export default Modal;
