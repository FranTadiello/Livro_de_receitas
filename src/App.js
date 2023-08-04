import './App.scss';
/* react router dom */
import {BrowserRouter, Routes, Route} from "react-router-dom";
/* pages */
import { Inicio, Cadastro, Error, Receitas } from "./pages/index";

function App() {
  return (
   <BrowserRouter /*Roteador*/> 
      <Routes>
        <Route path = "/" element = {<Inicio />} />
        <Route path = "/cadastrar-receita" element = {<Cadastro />} />
        <Route path = "/lista-de-receitas" element = {<Receitas />} />
        <Route path  = "*" element = {<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
