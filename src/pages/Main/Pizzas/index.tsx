import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
// import { useSnack } from "../../../hooks/useSnack"

export default function Pizzas() {
    // const { pizzas } = useSnack()

    const data = [
        {
            id: 1,
            snack: "Pizza",
            name: "Calabresa",
            description:
                "Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.",
            price: 25,
            image: "https://i.imgur.com/5rjJGkV.jpg",
        },
        {
            id: 2,
            snack: "Pizza",
            name: "Portuguesa",
            description:
                "Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate.",
            price: 28.5,
            image: "https://i.imgur.com/WCoyGoI.png",
        },        
        {
            id: 3,
            snack: "Pizza",
            name: "Napolitana",
            description:
                "Pizza recheada com queijo, mussarela, tomate e couve e uma bordacom catupiry.",
            price: 30,
            image: "https://i.imgur.com/u3DfvCE.jpg",
        },
        {
            id: 4,
            snack: "Pizza",
            name: "Mussarela",
            description:
                "Pizza recheada com mussarela, tendo uma borda recheada com catupiry. ",
            price: 20.5,
            image: "https://i.imgur.com/kPNXpa0.jpg",
        },
        {
            id: 5,
            snack: "Pizza",
            name: "Brigadeiro com Morango",
            description: "Pizza doce recheada com brigadeiro e morango.",
            price: 35,
            image: "https://i.imgur.com/43yC2Ap.jpg",
          },
          {
            id: 6,
            snack: "Pizza",
            name: "Banana",
            description: "Pizza doce recheada com banana e leite condensado.",
            price: 33.5,
            image: "https://i.imgur.com/Pcrgg1P.jpg",
          },
          {
            id: 7,
            snack: "Pizza",
            name: "Chocolate",
            description: "Pizza doce recheada com chocolate e bolinhas de chocolate.",
            price: 30,
            image: "https://i.imgur.com/RahAKkH.jpg",
          },
    ]

    return (
        <>
            <Head title="Pizzas" description="Nossas melhores pizzas" />
            <SnackTitle>Pizzas</SnackTitle>
            <Snacks snacks={data}></Snacks>
            {/* <Snacks snacks={pizzas}></Snacks> */}
        </>
    )
}