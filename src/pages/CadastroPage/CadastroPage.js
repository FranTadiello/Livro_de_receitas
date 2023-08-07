import React, { useState } from 'react';

function CadastroPage({ setReceitas }) {
    const [title, setTitle] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [preparo, setPreparo] = useState('')

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeIngredientes = (event) => {
        setIngredientes(event.target.value)
    }
    const onChangePreparo = (event) => {
        setPreparo(event.target.value)
    }

    const adicionarReceita = (evento) => {
        evento.preventDefault();

        const novaReceita = {
            title,
            ingredientes,
            preparo,
        };

        // Receitas antigas do localStorage ou inicializar um array vazio caso não haja nada
        const receitasAntigas = JSON.parse(localStorage.getItem('receitas') || '[]');

        // Adicionar a nova receita às receitas antigas
        const receitasAtualizadas = [...receitasAntigas, novaReceita];

        // Salvar a lista de receitas atualizada no localStorage
        localStorage.setItem('receitas', JSON.stringify(receitasAtualizadas));

        // Atualizar o estado do componente para refletir as receitas
        setReceitas(receitasAtualizadas);

        // Limpar o formulário após salvar a receita
        setTitle('');
        setIngredientes('');
        setPreparo('');
    };


    return (
        <div>
            <div className='card-header'>
                <h3>Adicione uma receita</h3>
            </div>
            <div className='card-body'>
                <form onSubmit={adicionarReceita}>
                    <div>
                        <label>Titulo</label>
                        <input type='text' id='title' value={title} onChange={onChangeTitle} />
                    </div>
                    <div>
                        <label>Ingredientes</label>
                        <input type='text' id='ingredientes' value={ingredientes} onChange={onChangeIngredientes} />
                    </div>
                    <div>
                        <label>Modo de preparo</label>
                        <input type='text' id='preparo' value={preparo} onChange={onChangePreparo} />
                    </div>

                    <div className='card-footer'>
                        <button type='submit'>Salvar receita</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroPage;