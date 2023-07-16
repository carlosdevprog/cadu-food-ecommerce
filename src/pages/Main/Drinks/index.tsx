import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
// import { useSnack } from "../../../hooks/useSnack"


export default function Drinks() {
    // const { drinks } = useSnack()

    const data = [
        {
            id: 1,
            snack: "Bebida",
            name: "Coca-Cola 2L",
            description: "A tradicional Coca-Cola.",
            price: 12,
            image: "https://i.imgur.com/Lg3aKhf.jpg",
        },
        {
            id: 2,
            snack: "Bebida",
            name: "Guaraná Antarctica",
            description:
                "O irresistível e saboroso Guaraná Antarctica.",
            price: 6.5,
            image: "https://i.imgur.com/hOBrOIm.jpg",
        },
        {
            id: 3,
            snack: "Bebida",
            name: "Suco de Abacaxi",
            description:
                "Suco natural de abacaxi.",
            price: 8,
            image: "https://i.imgur.com/VV9qTMh.jpg",
        },
        {
            id: 4,
            snack: "Bebida",
            name: "Suco de Laranja",
            description: "Suco natural de laranja.",
            price: 8,
            image: "https://i.imgur.com/2Lf2gHy.jpg",
        }
    ]

    console.log(data);


    return (
        <>
            <Head title="Bebidas" description="Nossas melhores bebidas" />
            <SnackTitle>Bebidas</SnackTitle>
            <Snacks snacks={data}></Snacks>
            {/* <Snacks snacks={drinks}></Snacks> */}
        </>
    )
}