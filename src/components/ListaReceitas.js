import React, { useState, useEffect } from 'react';
import CadastroPage from '../pages/CadastroPage/CadastroPage';

function ListaReceitas() {
  const [receitas, setReceitas] = useState([]);

  // Carregar as receitas do localStorage na inicialização do componente
  useEffect(() => {
    const receitasSalvas = JSON.parse(localStorage.getItem('receitas') || '[]');
    setReceitas(receitasSalvas);
  }, []);

  return (
    <div>
      {/* Renderizar as receitas */}
      {receitas.map((receita, index) => (
        <div key={index}>
          <h3>{receita.title}</h3>
          <p>Ingredientes: {receita.ingredientes}</p>
          <p>Modo de preparo: {receita.preparo}</p>
        </div>
      ))}

      {/* Renderizar o componente CadastroPage passando a função setReceitas */}
      <CadastroPage setReceitas={setReceitas} />
    </div>
  );
}

export default ListaReceitas;
