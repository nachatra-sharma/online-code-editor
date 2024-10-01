import { useContext } from "react";
import { ModalContext } from "../utils/ModalProvider";
import PlaygroundModal from "./PlaygroundModal";

const Modal = () => {
  const modalFeature = useContext(ModalContext);
  return (
    <>
      {modalFeature.activeModal === "playground-modal" && <PlaygroundModal />}
    </>
  );
};

export default Modal;
