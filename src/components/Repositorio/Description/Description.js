import { Owner } from './style';

export default function Description({ repositorioAtual }) {
    return (
        <>
            <Owner>
                <img
                    src={repositorioAtual.owner.avatar_url}
                    alt={repositorioAtual.owner.login}
                />
                <h1>{repositorioAtual.name}</h1>
                <p>{repositorioAtual.description}</p>
            </Owner>
        </>
    )
}