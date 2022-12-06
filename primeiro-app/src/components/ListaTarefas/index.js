export default function ListaTarefas({ tarefas }) {
    return (
        <div>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    )
}