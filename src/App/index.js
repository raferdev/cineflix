import Header from "./components/header";
import Home from "./components/home";
import Sessao from "./components/sessao";
import Assentos from "./components/assentos";
import Sucesso from "./components/sucesso";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
const [data, setData] = useState([])
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessao/:idFilme" element={<Sessao/>} />
          <Route path="/assentos/:idSessao" element={<Assentos setData={setData}/>} />
          <Route path="/sucesso" element={<Sucesso data={data}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
