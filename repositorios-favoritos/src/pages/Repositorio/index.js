import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutIssues from "../../components/Repositorio/AboutIssues/AboutIssues";
import { api } from '../../services/api'
import Loading from "../../components/loading/Loading";

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

    }, [repositorio, filters, filterIndex, page]);

    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    } else {
        return (
            <>
                <AboutIssues 
                    repositorioAtual={repositorioAtual}
                    issues={issues}
                    filterIndex={filterIndex}
                    setFilterIndex={setFilterIndex}
                    filters={filters}
                    page={page}
                    setPage={setPage}
                />
            </>
        )
    }
}