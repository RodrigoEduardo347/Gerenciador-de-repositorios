import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackButton, Container, Owner, IssuesList, PageActions, FilterList } from "./style";
import { api } from '../../services/api'
import Loading from "../../components/loading/Loading";
import { FaArrowLeft } from "react-icons/fa";

export default function Repositorio() {

    const [repositorioAtual, setRepositorioAtual] = useState('');
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const { repositorio } = useParams();
    const [filters, setFilters] = useState([
        { state: 'all', label: 'Todas', active: true },
        { state: 'open', label: 'Abertas', active: false },
        { state: 'closed', label: 'Fechadas', active: false },
    ]);
    const [filterIndex, setFilterIndex] = useState(0);

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

    function handlePage(action) {
        setPage(action === 'back' ? page - 1 : page + 1)
    }

    function handleFilter(index) {
        setFilterIndex(index);
    }

    useEffect(() => {
        async function loadIssue() {
            const response = await api.get(`repos/${repositorio}/issues`, {
                params: {
                    state: filters[filterIndex].state,
                    page,
                    per_page: 5,
                }
            });
            setIssues(response.data);
        };

        loadIssue();

    }, [filters, filterIndex, page]);

    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    } else {
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

                    <FilterList active={filterIndex}>
                        {filters.map((filter, index) => (
                            <button
                                type="button"
                                key={filter.label}
                                onClick={() => handleFilter(index)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </FilterList>

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

                    <PageActions>
                        <button
                            type="button"
                            onClick={() => handlePage("back")}
                            disabled={page < 2}
                        >
                            Voltar
                        </button>

                        <button
                            type="button"
                            onClick={() => handlePage("next")}
                        >
                            Próxima
                        </button>
                    </PageActions>
                </Container>
            </>
        )
    }
}