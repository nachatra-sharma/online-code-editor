import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import PlaygroundProvider from "./utils/PlaygroundProvider";
import ModalProvider from "./utils/ModalProvider";

const App = () => {
  return (
    <PlaygroundProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/playground/:fileId/:folderId"
              element={<Playground />}
            />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
  );
};

export default App;
