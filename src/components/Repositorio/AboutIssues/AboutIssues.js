import { Container } from "./style";
import BackButtonOption from "../BackButton/BackButton";
import Description from "../Description/Description";
import OptionsButtonFilter from "../OptionsButtonFilter/OptionsButtonFilter";
import ListOfIssues from "../ListOfIssues/ListOfIssues";
import OptionsButtonPage from "../OptionsButtonPage/OptionsButtonPage";

export default function AboutIssues({ repositorioAtual, issues, filterIndex, setFilterIndex, filters, page, setPage }) {

    return (
        <>
            <Container>
                
                <BackButtonOption />

                <Description repositorioAtual={repositorioAtual} />

                <OptionsButtonFilter filters={filters} filterIndex={filterIndex} setFilterIndex={setFilterIndex} />

                <ListOfIssues issues={issues} />

                <OptionsButtonPage page={page} setPage={setPage} />

            </Container>
        </>
    )
}