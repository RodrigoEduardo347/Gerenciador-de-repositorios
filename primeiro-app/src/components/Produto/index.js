import { useParams } from "react-router-dom"

export default function Produto() {
    const { id } = useParams();
    return (
        <>
            <p>Id: {id}</p>
        </>
    )
}