import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState('');

  const [tarefas, setTarefas] = useState([]);

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefa');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, []);
  
  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  }, [tarefas]);

  function cadastraTarefa(e) {
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastrando tarefas</h1>
      <form>
        <label>Seu nome:</label><br />
        <input
          placeholder="Digite a tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br/>

        <button onClick={cadastraTarefa}>Cadastrar</button>

      </form>

      <div>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
