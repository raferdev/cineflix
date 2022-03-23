import Header from "./components/header";
import Home from "./components/home";
import Sessao from "./components/sessao";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessao" element={<Sessao/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
