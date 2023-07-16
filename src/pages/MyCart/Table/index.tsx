import { useState, useEffect } from "react"
import { useCart } from "../../../hooks/useCart"
import { Link } from "react-router-dom"
import { TableDesktop } from "./TableDesktop"
import { TableMobile } from "./TableMobile"


export function Table() {

    const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

    const { cart } = useCart()

    useEffect(() => {
        function updateTableComponentBasedInWindowWidth() {
            const currentWidth = document.documentElement.clientWidth
            setWindowWidth(currentWidth)
        }
        window.addEventListener('resize', updateTableComponentBasedInWindowWidth)

        return () => {
            window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
        }
    }, [])


    if (cart.length === 0) {
        return (
            
            <h2 style={{ textAlign: 'center' }}>Ops, parece que você não tem pedidos. <Link to="/"><span style={{color: '#E8590C', textDecoration: 'underline'}}>Peça aqui!</span></Link>😁</h2>
        )
    }

    return windowWidth > 768 ? <TableDesktop /> : <TableMobile />

}