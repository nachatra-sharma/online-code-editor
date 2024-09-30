import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import PlaygroundProvider from "./utils/PlaygroundProvider";

const App = () => {
  return (
    <PlaygroundProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </BrowserRouter>
    </PlaygroundProvider>
  );
};

export default App;
