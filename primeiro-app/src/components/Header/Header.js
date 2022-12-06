import { Link } from "react-router-dom";
import style from './Header.module.css'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.title}>
                <h2>Header</h2>
            </div>
            <div className={style.menuBar}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                    <li><Link to='/produtos/:id'>Produtos</Link></li>
                </ul>
            </div>
        </header>
    )
}