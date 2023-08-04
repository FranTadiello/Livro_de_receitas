import React, { useState } from 'react';

const CadastroPage = () => {
    const [title, setTitle] = useState('')
    const [ingredientes, setIngredientes] = useState('')

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeIngredientes = (event) => {
        setIngredientes(event.target.value)
    }

    return (
        <div>
            <div className='card-header'>
                <h3>Adicione uma receita</h3>
            </div>
            <div className='card-body'>
                <form>
                    <div>
                        <label>Titulo</label>
                        <input type='text' id='title' value={title} onChange={onChangeTitle}/>
                    </div>
                    <div>
                        <label>Ingredientes</label>
                        <input type='text' id='ingrediente' value={ingredientes} onChange={onChangeIngredientes}/>
                    </div>
                    <div>
                        <label>Modo de preparo</label>
                        <input type='text' id='preparo'/>
                    </div>
                </form>
            </div>
            <div className='card-footer'>
                <button onClick={() => armazenar('receita',)}>Salvar receita</button>
            </div>
        </div>
    )
}

export default CadastroPage