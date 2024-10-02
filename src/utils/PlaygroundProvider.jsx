import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const PlaygroundContext = createContext();

const initialData = [
  {
    id: v4(),
    title: "Data Structure and Algorithm",
    files: [
      {
        id: v4(),
        title: "index",
        language: "cpp",
        code: `cout<< "Hello World";`,
      },
    ],
  },
  {
    id: v4(),
    title: "Frontend",
    files: [
      {
        id: v4(),
        title: "test",
        language: "javascript",
        code: `console.log('hello world')`,
      },
    ],
  },
];

const defaultCode = {
  ["cpp"]: `#include <iostream>
      int main() {
      std::cout << "Try programiz.pro";
      return 0;
    }`,
  ["javascript"]: `console.log("Hello world");`,
  ["python"]: `print("hello python")`,
  ["java"]: `class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Try programiz.pro");
      }
  }`,
};

const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(() => {
    const localData = localStorage.getItem("data");
    if (localData) {
      console.log(localData);
      return JSON.parse(localData);
    } else {
      return initialData;
    }
  });

  const createNewPlayground = (newPlayground) => {
    const { fileName, folderName, language } = newPlayground;
    const newFolders = [...folders];
    newFolders.push({
      id: v4(),
      title: folderName,
      files: [
        {
          id: v4(),
          title: fileName,
          language: language,
          code: defaultCode[language],
        },
      ],
    });
    localStorage.setItem("data", JSON.stringify(newFolders));
    setFolders(newFolders);
  };

  const createNewFolder = ({ folderName }) => {
    const newFolder = {
      id: v4(),
      title: folderName,
      files: [],
    };

    const allFolders = [...folders, newFolder];
    localStorage.setItem("data", JSON.stringify(allFolders));
    setFolders(allFolders);
  };

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(folders));
    }
  }, []);

  const playgroundFeatures = {
    folders,
    createNewPlayground,
    createNewFolder,
  };

  return (
    <PlaygroundContext.Provider value={playgroundFeatures}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundProvider;
