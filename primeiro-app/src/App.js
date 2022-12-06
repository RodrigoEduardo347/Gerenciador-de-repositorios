import { useState, useEffect } from "react";
import Form from "./components/Form";
import ListaTarefas from "./components/ListaTarefas";
import Rotas from "./routes";

export default function App() {

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

  return (
    <div>
      <Rotas />
      <Form tarefas={tarefas} setTarefas={setTarefas}/>
      <ListaTarefas tarefas={tarefas} />
    </div>
  )
}
