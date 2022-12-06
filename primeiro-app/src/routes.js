import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Header from "./components/Header/Header";
import NotFoundPage from "./components/404 NOT FOUND";
import Produto from "./components/Produto";

const Rotas = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contato" element={<Contato />} />
                    <Route exact path="/sobre" element={<Sobre />} />
                    <Route path="/produtos/:id" element={<Produto />} />
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Rotas;