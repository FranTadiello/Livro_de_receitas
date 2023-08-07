import React, { useEffect, useState } from 'react';

function CadastroPage() {
    const [title, setTitle] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [preparo, setPreparo] = useState('')

    const [listaReceitas, setListaReceitas] = useState([])

    useEffect(() =>{
        //Toda vez que o estado "listaReceitas" alterar seu valor, o que está dentro do useEffect vai ser executado
        // neste caso vamos printar o valor da lista de receitas
        // e salvar no local storage
        localStorage.setItem('receitas', JSON.stringify(listaReceitas));
        console.log(listaReceitas);
    },[listaReceitas])

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeIngredientes = (event) => {
        setIngredientes(event.target.value)
    }
    const onChangePreparo = (event) => {
        setPreparo(event.target.value)
    }

    const handleSalvar = (event) => {

        event.preventDefault()//quando clicar no botão a página nao vai recarregar
        console.log("oi");//clica f12 e olha o console pra ver o que "oi" se repete..
        //pode tirar o event.preventDefault() e clicar no botao e ver que apagina recarrega
        
        const novaReceita = {
            "title": title,
            "ingredientes": ingredientes,
            "preparo": preparo,
        };
        
        
        // usando spread a gente coloca na state "listaReceitas" a receita anterior + a nova que foi adiciona no formulário
        setListaReceitas((receitasAnterior) => [...receitasAnterior, novaReceita]);
        
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
                <form >
                    <div>
                        <label>Titulo</label>
                        <input type='text' id='title' value={title} onChange={onChangeTitle} />
                    </div>
                    <div>
                        <label>Ingredientes</label>
                        <textarea  type='text' id='ingredientes' value={ingredientes} onChange={onChangeIngredientes} />
                        {/* textarea é para escrever dando enter */}
                    </div>
                    <div>
                        <label>Modo de preparo</label>
                        <textarea type='text' id='preparo' value={preparo} onChange={onChangePreparo} />
                    </div>

                    <div className='card-footer'>
                        <button onClick={handleSalvar} type='button'>Salvar receita</button>
                        {/* Colocar submit apenas no botao para nao ter o efeito de submit ao apertar enter nos imput */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroPage;