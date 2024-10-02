import { createContext, useState } from "react";
export const ModalContext = createContext();
export const modalConstants = {
  "playground-modal": "playground-modal",
  "create-folder": "create-folder",
};
const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);

  const closeModal = () => {
    setModalType(null);
  };

  const modalFeature = {
    openModal: setModalType,
    closeModal: closeModal,
    activeModal: modalType,
  };

  return (
    <ModalContext.Provider value={modalFeature}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
