import { useContext } from "react";
import { ModalContext } from "../utils/ModalProvider";
import PlaygroundModal from "./PlaygroundModal";
import { modalConstants } from "../utils/ModalProvider";
import CreateFolderModal from "./CreateFolderModal";
import UpdateFolderModal from "./UpdateFolderModal";
import UpdateFileModal from "./UpdateFileModal";
import CreatePlaygroundModal from "./CreatePlaygroundModal";

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
      {modalFeature.activeModal === modalConstants["update-folder"] && (
        <UpdateFolderModal />
      )}
      {modalFeature.activeModal === modalConstants["update-file"] && (
        <UpdateFileModal />
      )}
      {modalFeature.activeModal === modalConstants["create-playground"] && (
        <CreatePlaygroundModal />
      )}
    </>
  );
};

export default Modal;
