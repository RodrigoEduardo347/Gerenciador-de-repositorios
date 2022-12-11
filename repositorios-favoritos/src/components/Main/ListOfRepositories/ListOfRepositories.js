import { List, DeleteButton } from "./style";
import { Link } from 'react-router-dom';
import { FaBars, FaTrash } from 'react-icons/fa';

export default function ListOfRepositories({ repositorios, handleDelete }) {
    return (
        <>
            <List >
                {repositorios.map(repo => (
                    <li key={repo}>
                        <span>{repo}</span>
                        <span>
                            <Link to={`repositorio/${encodeURIComponent(repo)}`}>
                                <FaBars size={20} />
                            </Link>
                            <DeleteButton onClick={() => handleDelete(repo)}>
                                <FaTrash size={20} />
                            </DeleteButton>
                        </span>
                    </li>
                ))}
            </List>
        </>
    )
}