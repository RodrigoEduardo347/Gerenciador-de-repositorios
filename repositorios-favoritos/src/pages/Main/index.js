import { useState, useCallback, useEffect } from 'react';
import { Container } from './style';
import { FaGithub } from 'react-icons/fa';
import { api } from '../../services/api';
import RepoForm from '../../components/Main/RepoForm/RepoForm';
import ListOfRepositories from '../../components/Main/ListOfRepositories/ListOfRepositories';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        let data = localStorage.getItem('repo');

        if (data) {
            setRepositorios(JSON.parse(data));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('repo', JSON.stringify(repositorios));
    }, [repositorios]);

    function handleChangeInput(e) {
        setAlert(false);
        setNewRepo(e.target.value);
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setAlert(false);

        async function submit() {
            try {

                if (newRepo === '') {
                    throw new Error("Você precisa indicar um repositório!");
                }

                const hasRepo = repositorios.find(repo => repo === newRepo);

                if (hasRepo) {
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

                <RepoForm
                    handleSubmit={handleSubmit}
                    handleChangeInput={handleChangeInput}
                    newRepo={newRepo}
                    alert={alert}
                    loading={loading}
                />

                <ListOfRepositories repositorios={repositorios} handleDelete={handleDelete} />

            </Container>
        </>
    )
}