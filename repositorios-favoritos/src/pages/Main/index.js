import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, SubmitButton, List, DeleteButton } from './style';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { api } from '../../services/api';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    useEffect(()=>{
        let data = localStorage.getItem('repo');
        
        if(data){
            setRepositorios(JSON.parse(data));
        }
        

    },[]);

    useEffect(()=> {
        localStorage.setItem('repo', JSON.stringify(repositorios));
    }, [repositorios]);

    function handleChangeInput(e) {
        setAlert(null);
        setNewRepo(e.target.value);
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setAlert(null);

        async function submit() {
            try {

                if(newRepo === ''){
                    throw new Error("Você precisa indicar um repositório!");
                }

                const hasRepo = repositorios.find(repo => repo === newRepo);

                if(hasRepo){
                    throw new Error("Repositório duplicado!");
                }

                setLoading(true);
                const response = await api.get(`/repos/${newRepo}`);
                const data = {
                    name: response.data.full_name,
                };

                setRepositorios([...repositorios, data.name]);
                setNewRepo('');
            } catch (error) {
                setAlert(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        submit();
    }, [newRepo, repositorios]);

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r !== repo);
        setRepositorios(find);
    }, [repositorios])

    return (
        <>
            <Container>
                <h1>
                    <FaGithub size={25} />
                    Meus repositórios
                </h1>

                <Form onSubmit={handleSubmit} error={alert}>

                    <input
                        type="text"
                        onChange={handleChangeInput}
                        value={newRepo}
                    />
                    <SubmitButton loading={loading ? 1 : 0}>
                        {loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (
                            <FaPlus color="#FFF" size={14} />
                        )}
                    </SubmitButton>
                </Form>

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
            </Container>
        </>
    )
}