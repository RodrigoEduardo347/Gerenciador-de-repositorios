import { Form, SubmitButton } from './style';
import { FaPlus, FaSpinner } from 'react-icons/fa';

export default function RepoForm({ alert, handleSubmit, handleChangeInput, newRepo, loading }) {
    return (
        <>
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
        </>
    )
}
