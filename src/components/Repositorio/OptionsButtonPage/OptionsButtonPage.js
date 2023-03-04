import { PageActions } from "./style"

export default function OptionsButtonPage({ page, setPage }) {

    function handlePage(action) {
        setPage(action === 'back' ? page - 1 : page + 1)
    }

    return (
        <>
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
        </>
    )
}