import { Link } from "react-router-dom"

function Header() {

    return (
        <div className="header">
            <div className="header__logo">Logo</div>

            <nav className="header__nav u-flex-center">
                <ul className="nav__links u-flex-bw">
                    <li><Link to="/" className="link">Inicio</Link></li>
                    <li><Link to="/sobre-mi" className="link">Sobre mi</Link></li>
                    <li><Link to="/proyectos" className="link">Proyectos</Link></li>
                </ul>

                <Link to="/contacto" className="link__contact">Contacto</Link>      
            </nav>
        </div>
    )
}

export default Header