import { useState, useCallback } from 'react';
import { Container, Form, SubmitButton } from './style';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { api } from '../../services/api';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);

    function handleClick(e) {
        setNewRepo(e.target.value);
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {
            try {
                setLoading(true);
                const response = await api.get(`/repos/${newRepo}`);
                const data = {
                    name: response.data.full_name,
                };

                setRepositorios([...repositorios, data.name]);
                setNewRepo('');
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        submit();
    }, [newRepo, repositorios]);

    return (
        <>
            <Container>
                <h1>
                    <FaGithub size={25} />
                    Meus repositórios
                </h1>

                <Form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        onChange={handleClick}
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
            </Container>
        </>
    )
}