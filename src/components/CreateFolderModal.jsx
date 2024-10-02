import { useContext } from "react";
import { ModalContext } from "../utils/ModalProvider";
import { PlaygroundContext } from "../utils/PlaygroundProvider";

const CreateFolderModal = () => {
  const modalFeature = useContext(ModalContext);
  const playgroundFeature = useContext(PlaygroundContext);
  const closeModal = () => {
    modalFeature.closeModal();
  };
  const onSubmitModal = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    if (folderName !== "") {
      playgroundFeature.createNewFolder({
        folderName,
      });
      closeModal();
    }
  };
  return (
    <form
      className="flex justify-center items-center w-full h-full absolute z-10 top-0 bottom-0 bg-[rgba(0,0,0,0.4)]"
      onSubmit={(e) => onSubmitModal(e)}
    >
      <div className="w-1/3 h-auto bg-[#fff] shadow-[0_35px_60px_-6px_rgba(150,150,150,0.1),0_-35px_60px_-6px_rgba(150,150,150,0.1),5px_0_40px_-6px_rgba(150,150,150,0.1),-35px_0_60px_-6px_rgba(150,150,150,0.1)] py-5 px-5 rounded-sm gap-7 flex flex-col">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Create new folder</h1>
          </div>
          <div className="flex items-center">
            <span
              className="material-icons cursor-pointer"
              onClick={closeModal}
            >
              close
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">Enter Folder Name</p>
          <input
            className="border-2 rounded-sm border-gray-800 px-2"
            type="text"
            name="folderName"
            required
          />
        </div>

        <div className="flex justify-between">
          <div>
            <button
              type="submit"
              className="bg-gray-900 text-white py-2 px-4 rounded-sm text-sm tracking-wider"
            >
              Create Playground
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateFolderModal;
