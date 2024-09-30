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

const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(initialData);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(folders));
  }, [folders]);

  return (
    <PlaygroundContext.Provider value={folders}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundProvider;
