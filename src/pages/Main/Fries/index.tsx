import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
// import { useSnack } from "../../../hooks/useSnack"

export default function Fries() {
    // const { fries } = useSnack()

    const data = [
        {
            id: 1,
            snack: "Batata",
            name: "Batata frita tradicional crocante",
            description: "A tradicional batata frita crocante.",
            price: 10,
            image: "https://i.imgur.com/ij50UxP.jpeg"
        },
        {
            id: 2,
            snack: "Batata",
            name: "Bacon e molho de queijo",
            description: "Batata frita especial com bacon e molho de queijo.",
            price: 12.5,
            image: "https://i.imgur.com/KZDA5Q9.jpeg"
        },
        {
            id: 3,
            snack: "Batata",
            name: "Carne e molho cheddar",
            description: "Batata frita especial com carne e molho cheddar.",
            price: 14,
            image: "https://i.imgur.com/Ii90nat.jpeg"
        }
    ]

    return (
        <>
            <Head title="Batatas fritas" description="Nossas melhores batatas fritas" />
            <SnackTitle>Batatas Fritas</SnackTitle>
            <Snacks snacks={data}></Snacks>
            {/* <Snacks snacks={fries}></Snacks> */}

        </>
    )
}