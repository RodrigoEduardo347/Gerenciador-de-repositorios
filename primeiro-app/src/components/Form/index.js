import React, { useState } from "react";

export default function Form({tarefas, setTarefas}) {

    const [input, setInput] = useState('');

    function cadastraTarefa(e) {
        e.preventDefault();
        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <React.Fragment>
            <h1>Cadastrando tarefas</h1>
            <form>
                <label>Nome da tarefa:</label><br />
                <input
                    placeholder="Digite a tarefa..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /><br />

                <button onClick={cadastraTarefa}>Cadastrar</button>

            </form>
        </React.Fragment>
    )
}