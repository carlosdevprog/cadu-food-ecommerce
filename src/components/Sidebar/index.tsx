import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Container } from "./styles"
import menuIcon from "../../assets/menu.svg"
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg"
import { ReactComponent as PizzaIcon } from "../../assets/pizza.svg"
import { ReactComponent as SodaPopIcon } from "../../assets/soda.svg"
import { ReactComponent as IceCreamIcon } from "../../assets/ice-cream.svg"
import { ReactComponent as FriesIcon } from "../../assets/fries.svg"

export function Sidebar() {

    const [menuOpen, setMenuOpen] = useState(false)

    function handleToggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return (
        <Container isMenuOpen={menuOpen}>
            <button type="button" onClick={handleToggleMenu}>
                <img src={menuIcon} alt="ícone de menu" />
            </button>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <BurgerIcon />
                            <span>Hambúrgueres</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pizzas">
                            <PizzaIcon />
                            <span>Pizzas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bebidas">
                            <SodaPopIcon />
                            <span>Bebidas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sorvetes">
                            <IceCreamIcon />
                            <span>Sorvetes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/batatas">
                            <FriesIcon />
                            <span>Batatas<br/>Fritas</span>
                        </NavLink>
                    </li>
                </ul>               
            </nav>
        </Container>
    )
}