import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
// import { useSnack } from "../../../hooks/useSnack"

export default function IceCreams() {
    // const { iceCreams } = useSnack()

    const data = [
        {
            id: 1,
            snack: "Sorvete",
            name: "Chocolate",
            description:
                "Sorvete de chocolate com granulados.",
            price: 6,
            image: "https://i.imgur.com/osAHOLe.jpg",
        },
        {
            id: 2,
            snack: "Sorvete",
            name: "Flocos",
            description:
                "O tradicional flocos vem com cobertura em chocolate.",
            price: 7,
            image: "https://i.imgur.com/qgnFLiy.jpg",
        },
        {
            id: 3,
            snack: "Sorvete",
            name: "Creme",
            description: "O simples sorvete de creme com um gosto irresistível.",
            price: 6.5,
            image: "https://i.imgur.com/dFLysrT.jpg",
        },
        {
            id: 4,
            snack: "Sorvete",
            name: "Morango",
            description: "O clássico sorvete de morango que deixe tudo mais leve.",
            price: 10,
            image: "https://i.imgur.com/0TWnEI7.jpg",
        }
    ]

    return (
        <>
            <Head title="Sorvetes" description="Nossos melhores sorvetes" />
            <SnackTitle>Sorvetes</SnackTitle>
            <Snacks snacks={data}></Snacks>
            {/* <Snacks snacks={iceCreams}></Snacks> */}
        </>
    )
}