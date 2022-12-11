import { FaArrowLeft } from "react-icons/fa";
import { BackButton } from "./style";

export default function BackButtonOption() {
    return (
        <>
            <BackButton to="/">
                <FaArrowLeft color='#000' size={30} />
            </BackButton>
        </>
    )
}