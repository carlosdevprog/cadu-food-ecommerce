import { Container } from "./styles"
import { Link } from "react-router-dom"
import caduLogo from "../../assets/cadu-logo.svg"
import { useCart } from "../../hooks/useCart"
import CartImg from "../../assets/shopping-cart.svg"

export function OrderHeader() {

    const { cart } = useCart()

    return (
        <Container>
            <div className="container-logo">
                <Link to="/">
                    <img src={caduLogo} alt="Cadu logo" />
                </Link>
                <h2>Cadu<br /><span>Lanches</span></h2>
            </div>

            <div className="container-cart">
                <h2>
                    Meus pedidos <br/>
                    <span>{`${cart.length}`.padStart(2, '0')} lanche(s)</span>
                </h2>
                <Link to="/carrinho">
                <img src={CartImg} alt="imagem do carrinho" />
                </Link>
            </div>

        </Container>
    )
}