import "./styleNav.css"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
  return (
    <div className="navbar">
        <div>
            Mi Futuro Logo
        </div>
        <div>
            <ul className="list">
                <li>
                    <a href="*" alt="1">Todos los Productos</a>
                </li>
                <li>
                    <a href="*" alt="2">Hombre</a>
                </li>
                <li>
                    <a href="*" alt="3">Mujer</a>
                </li>
                <li>
                    <a href="*" alt="4">Niños</a>
                </li>
            </ul>
        </div>
        <div>
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar