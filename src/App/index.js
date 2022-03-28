import Header from "./components/header";
import Home from "./components/home";
import Sessao from "./components/sessao";
import Assentos from "./components/assentos";
import Sucesso from "./components/sucesso";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
const [data, setData] = useState({})
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessao/:idFilme" element={<Sessao setData={setData}/>} data={data} />
          <Route path="/assentos/:idSessao" element={<Assentos data={data} setData={setData}/>} />
          <Route path="/sucesso" element={<Sucesso data={data} setData={setData}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
