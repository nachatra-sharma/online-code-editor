import { useParams } from "react-router-dom";
import { Editor } from "@monaco-editor/react";
import { useContext, useRef, useState } from "react";
import { PlaygroundContext } from "../utils/PlaygroundProvider";

const Playground = () => {
  const param = useParams();
  const { fileId, folderId } = param;
  const { getDefaultCode, getLanguage, updateLanguage } =
    useContext(PlaygroundContext);
  const [code, setCode] = useState(() => {
    return getDefaultCode(fileId, folderId);
  });
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState(() => {
    return getLanguage(fileId, folderId);
  });
  const codeRef = useRef(code);

  const editorOptions = {
    wordWrap: "on",
  };

  const fileExtension = {
    cpp: "cpp",
    javascript: "js",
    python: "py",
    java: "java",
  };

  const onImportCode = (event) => {
    const file = event.target.files[0];
    const fileType = file.type.includes("text");
    if (fileType) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = function (event) {
        const importedCode = event.target.result;
        setCode(importedCode);
      };
    } else {
      alert("please choose program file");
    }
  };

  const onImportInput = (e) => {
    const file = e.target.files[0];
    const fileType = file.type.includes("text");
    if (fileType) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = (e) => {
        setInput(e.target.result);
      };
    } else {
      alert("please choose program file");
    }
  };

  const onChangeLanguage = (e) => {
    if (e.target.value === "cpp") {
      updateLanguage(fileId, folderId, e.target.value.toUpperCase());
    } else {
      updateLanguage(
        fileId,
        folderId,
        e.target.value[0].toUpperCase() +
          e.target.value.slice(1, e.target.value.length)
      );
    }
    setCode(getDefaultCode(fileId, folderId));
    setLanguage(e.target.value);
  };

  const onChangeTheme = (e) => {
    setTheme(e.target.value);
  };
  const onExportCode = () => {
    //  extract the code
    const codeValue = codeRef.current?.trim();
    if (!codeValue) {
      alert("please type some code in the editor before exporting");
    }
    // create a blob / instance file in memory
    const codeBlob = new Blob([codeValue], { type: "text/plain" });
    // create downloadable link with blob data
    const downloadURL = URL.createObjectURL(codeBlob);
    // create a clickable link to download the blob / file
    const link = document.createElement("a");
    link.href = downloadURL;
    link.download = `code.${fileExtension[language]}`;
    link.click();
  };

  const onChangeCode = (newCode) => {
    // todo handle something to the new code
    codeRef.current = newCode;
    setCode(newCode);
  };

  const onExportOutput = () => {
    const outputValue = output.trim();
    if (!outputValue) {
      alert("Output is empty");
      return;
    }
    const blob = new Blob([outputValue], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `output.txt`;
    link.click();
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
                    test
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
                    onChange={(e) => onChangeLanguage(e)}
                    value={language.toLowerCase()}
                    className="bg-transparent outline-none border-2 border-slate-700 px-2 rounded-sm py-1"
                  >
                    <option value="cpp">CPP</option>
                    <option value="java">Java</option>
                    <option value="javascript">Javascript</option>
                    <option value="python">Python</option>
                  </select>
                </div>
                <div>
                  <select
                    value={theme}
                    onChange={(e) => onChangeTheme(e)}
                    name="theme"
                    className="bg-transparent outline-none border-2 border-slate-700 px-2 rounded-sm py-1"
                  >
                    <option value="vs-light">VS Light</option>
                    <option value="vs-dark">VS Dark</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* editor */}
          <div className="w-full h-[81.2%]">
            <Editor
              className="w-full h-full"
              language={language}
              options={editorOptions}
              theme={theme}
              value={code}
              onChange={onChangeCode}
            />
          </div>

          {/* footer */}
          <div className="w-full bg-white">
            <div className="w-[95%] mx-auto flex py-1 justify-between items-center">
              <div>
                <div className="flex gap-3 items-center cursor-pointer">
                  <i className="fa-solid fa-expand text-gray-700"></i>
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
                      <i className="fa-solid fa-download text-slate-600"></i>
                      <p className="text-sm text-slate-600">Import Input</p>
                    </label>
                    <input
                      className="hidden"
                      type="file"
                      id="file"
                      onChange={onImportCode}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-auto py-[1.37rem] px-2 flex justify-between">
                  <div>
                    <button
                      className="flex flex-row gap-3 items-center"
                      onClick={onExportCode}
                    >
                      <i className="fa-solid fa-upload text-slate-600"></i>
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
                    htmlFor="import"
                    className="flex flex-row gap-3 items-center cursor-pointer"
                  >
                    <i className="fa-solid fa-download text-slate-600"></i>
                    <p className="text-sm text-slate-600">Import Input</p>
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    id="import"
                    onChange={onImportInput}
                  />
                </div>
              </div>
            </div>
            <div className="h-full">
              <textarea
                className="px-2 outline-none resize-none w-full h-full"
                name=""
                id=""
                value={input}
                onChange={(e) => setInput(e.target.value)}
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
                  <button
                    className="flex flex-row gap-3 items-center"
                    onClick={onExportOutput}
                  >
                    <i className="fa-solid fa-upload text-slate-600"></i>
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
                value={output}
                onChange={(e) => setOutput(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
