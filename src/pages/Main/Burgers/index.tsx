import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks";
// import { useSnack } from "../../../hooks/useSnack"

export default function Burgers() {
    // const { burgers } = useSnack()

    const data = [
        {
            id: 1,
            snack: "Hambúrguer",
            name: "Mega",
            description:
                "Hmabúrguer artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.",
            price: 25.5,
            image: "https://i.imgur.com/upjIUnG.jpg",
        },
        {
            id: 2,
            snack: "Hambúrguer",
            name: "Extra Bacon",
            description:
                "Criado para os amantes de bacon, possui em todas as suas camadas bacon, queijo e carne.",
            price: 23.5,
            image: "https://i.imgur.com/B4J04AJ.jpg",
        },
        {
            id: 3,
            snack: "Hambúrguer",
            name: "Tradicional",
            description:
                "O simples também é delicioso, principalmente se envolver nossa carne artesanal e queijo.",
            price: 12,
            image: "https://i.imgur.com/Jz506jB.jpg",
        },
        {
            id: 4,
            snack: "Hambúrguer",
            name: "Big Carne",
            description:
                "Uma carne artesana, uma salada completa com alface, cebola, tomate e outros.",
            price: 18,
            image: "https://i.imgur.com/bF8EdBb.jpg",
        },
        {
            id: 5,
            snack: "Hambúrguer",
            name: "Carne dupla",
        description:
          "Sanduíche com carne dupla e saborosa, recheada com queijo, molho e salada.",
        price: 20,
        image: "https://i.imgur.com/fdEY2kY.jpg",
        }       

    ]

    console.log(data);


    return (
        <>
            <Head title="Hambúrgueres" description="Nossos melhores hambúrgueres" />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={data}></Snacks>
            {/* <Snacks snacks={burgers}></Snacks> */}

        </>
    )
}