import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackButton, Container, Owner, IssuesList } from "./style";
import { api } from '../../services/api'
import Loading from "../../components/loading/Loading";
import { FaArrowLeft } from "react-icons/fa";

export default function Repositorio() {

    const [repositorioAtual, setRepositorioAtual] = useState('');
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    const { repositorio } = useParams();
    useEffect(() => {
        async function load() {
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`repos/${repositorio}`),
                api.get(`repos/${repositorio}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                }),
            ]);

            setRepositorioAtual(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load();
    }, [repositorio]);

    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    } else {
        console.log(issues)
        return (
            <>
                <Container>
                    <BackButton to="/">
                        <FaArrowLeft color='#000' size={30} />
                    </BackButton>

                    <Owner>
                        <img
                            src={repositorioAtual.owner.avatar_url}
                            alt={repositorioAtual.owner.login}
                        />
                        <h1>{repositorioAtual.name}</h1>
                        <p>{repositorioAtual.description}</p>
                    </Owner>

                    <IssuesList>
                        {issues.map(issue => (
                            <li key={String(issue.id)}>
                                <img src={issue.user.avatar_url} alt={issue.user.login} />
                                <div>
                                    <strong>
                                        <a href={issue.html_url}>{issue.title}</a>

                                        {issue.labels.map(label => (
                                            <span key={String(label.id)}>{label.name}</span>
                                        ))}
                                    </strong>

                                    <p>{issue.user.login}</p>
                                </div>

                            </li>
                        ))}
                    </IssuesList>
                </Container>
            </>
        )
    }
}