import { createContext, useState } from "react";
export const ModalContext = createContext();
export const modalConstants = {
  "playground-modal": "playground-modal",
  "create-folder": "create-folder",
  "update-folder": "update-folder",
  "update-file": "udpate-file",
};

const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);
  const [modalPayload, setModalPayload] = useState(null);

  const closeModal = () => {
    setModalType(null);
    setModalPayload(null);
  };

  const modalFeature = {
    openModal: setModalType,
    closeModal: closeModal,
    activeModal: modalType,
    modalPayload,
    setModalPayload,
  };

  return (
    <ModalContext.Provider value={modalFeature}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
