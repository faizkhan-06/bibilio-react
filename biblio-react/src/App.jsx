import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/utilites.css";
import "./index.css";
import "./styles/home-css.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
