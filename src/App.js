import './App.scss';
/* react router dom */
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
/* pages */
import { Inicio, Cadastro, Error, Receitas } from "./pages/index";
import ListaReceitas from './components/ListaReceitas';

function App() {
  return (
   <Router /*Roteador*/> 
      <Routes>
        <Route path = "/" element = {<Inicio />} />
        <Route path = "/cadastrar-receita" element = {<ListaReceitas />} />
        <Route path = "/lista-de-receitas" element = {<Receitas />} />
        <Route path  = "*" element = {<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
