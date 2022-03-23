import Header from "./components/header";
import Home from "./components/home";
import { BrowserRouter, Routers, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
