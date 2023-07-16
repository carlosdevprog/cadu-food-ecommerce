// import { useParams } from 'react-router-dom'

import { Head } from '../../../components/Head'

import { Container, Inner, SubTitle, Title } from './styled'

export default function OrderSuccessPage() {
  // const { orderId } = useParams()

  return (
    <Container>
      <Head title='Compra Realizada com Sucesso!' />

      <Inner>
        <Title>Compra Realizada com Sucesso</Title>
{/* 
        <p>
          Número de Pedido <code>#{orderId}</code>
        </p> */}

        <SubTitle>Dados de Contato da Loja</SubTitle>

        <ul>
          <li>Endereço: Rua Pérsia, 4</li>
          <li>Tel: 81 99900-3257</li>
        </ul>

        <br />
        <a href='/'>Clique aqui para voltar a página inicial.</a>
      </Inner>
    </Container>
  )
}
