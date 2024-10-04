import { useParams } from "react-router-dom";
import { Editor } from "@monaco-editor/react";

const Playground = () => {
  const param = useParams();
  const editorOptions = {
    wordWrap: "on",
  };
  const onChangeCode = (newCode) => {
    console.log(newCode);
    // todo handle something to the new code
  };
  return (
    <>
      {/* code */}
      <div className="flex w-[100vw] h-[100vh] overflow-hidden">
        {/* editor */}
        <div className="bg-gray-700 w-[65%]">
          {/* header of editor */}
          <div className="w-full bg-white">
            <div className="w-[95%] mx-auto flex py-4 justify-between items-center">
              <div>
                <div className="flex gap-3 items-center">
                  <h1 className="font-semibold tracking-wide text-xl text-slate-700">
                    test.js
                  </h1>
                  <span className="material-icons text-slate-700 text-md">
                    edit
                  </span>
                  <button className="py-2 px-6 bg-slate-800 text-gray-200 text-sm tracking-wider rounded-full">
                    Save Code
                  </button>
                </div>
              </div>
              <div className="flex gap-7">
                <div>
                  <select
                    name="language"
                    className="bg-transparent outline-none border-2 border-slate-700 px-2 rounded-sm py-1"
                  >
                    <option value="CPP">CPP</option>
                    <option value="Java">Java</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Python">Python</option>
                  </select>
                </div>
                <div>
                  <select
                    name="theme"
                    className="bg-transparent outline-none border-2 border-slate-700 px-2 rounded-sm py-1"
                  >
                    <option value="Github Dark">Github Dark</option>
                    <option value="vs dark">vs dark</option>
                    <option value="vs light">vs light</option>
                    <option value="Python">Python</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* editor */}
          <div className="w-full h-[81.2%]">
            <Editor
              className="w-full h-full"
              language="javascript"
              options={editorOptions}
              theme="vs-dark"
              onChange={onChangeCode}
            />
          </div>

          {/* footer */}
          <div className="w-full bg-white">
            <div className="w-[95%] mx-auto flex py-1 justify-between items-center">
              <div>
                <div className="flex gap-3 items-center cursor-pointer">
                  <i class="fa-solid fa-expand text-gray-700"></i>
                  <h1 className="text-gray-700 font-medium text-md">
                    Full Screen
                  </h1>
                </div>
              </div>
              <div>
                <div className="mx-auto py-[1.37rem] px-2 flex justify-between">
                  <div>
                    <label
                      htmlFor="file"
                      className="flex flex-row gap-3 items-center cursor-pointer"
                    >
                      <i class="fa-solid fa-download text-slate-600"></i>
                      <p className="text-sm text-slate-600">Import Input</p>
                    </label>
                    <input className="hidden" type="file" id="file" />
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-auto py-[1.37rem] px-2 flex justify-between">
                  <div>
                    <button className="flex flex-row gap-3 items-center">
                      <i class="fa-solid fa-upload text-slate-600"></i>
                      <p className="text-sm text-slate-600">Export Output</p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button className="py-2 px-6 bg-slate-800 text-gray-200 text-sm tracking-wider rounded-full">
                  Run Code
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[35%]">
          {/* input */}
          <div className="flex flex-col gap-1 h-1/2">
            <div className="shadow-md w-full">
              <div className="mx-auto py-[1.37rem] px-2 w-[95%] flex justify-between">
                <h1 className="font-semibold tracking-wide text-slate-600">
                  Input:
                </h1>
                <div>
                  <label
                    htmlFor="file"
                    className="flex flex-row gap-3 items-center cursor-pointer"
                  >
                    <i class="fa-solid fa-download text-slate-600"></i>
                    <p className="text-sm text-slate-600">Import Input</p>
                  </label>
                  <input className="hidden" type="file" id="file" />
                </div>
              </div>
            </div>
            <div className="h-full">
              <textarea
                className="px-2 outline-none resize-none w-full h-full"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
          {/* output */}
          <div className="flex flex-col gap-1 h-1/2">
            <div className="shadow-md border-t-2 w-full">
              <div className="mx-auto py-[1.37rem] px-2 w-[95%] flex justify-between">
                <h1 className="font-semibold tracking-wide text-slate-600">
                  output:
                </h1>
                <div>
                  <button className="flex flex-row gap-3 items-center">
                    <i class="fa-solid fa-upload text-slate-600"></i>
                    <p className="text-sm text-slate-600">Export Output</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full">
              <textarea
                className="px-2 outline-none resize-none w-full h-full"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
