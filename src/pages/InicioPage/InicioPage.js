import { useNavigate } from 'react-router-dom';

const InicioPage = () => {
    const navigate = useNavigate();

    return (
      <div>
          <h1>Salve Receitas</h1>
          <button onClick={() => {return navigate("/lista-de-receitas")}}>Lista de Receitas</button>
          <button onClick={() => {return navigate("/cadastrar-receita")}}>Cadastrar Receitas</button>
      </div>
    )
  }
  
  export default InicioPage