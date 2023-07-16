import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'
import { Outlet } from 'react-router-dom'
import { MyOrder } from '../../components/MyOrder'
import caduLogo from "../../assets/cadu-logo.svg"

export default function Main() {
  return (
    <Container>
      <Sidebar/>
      <section>
        <div>          
            <img src={caduLogo} alt='Cadu logo' />          
          <h2>Cadu<br/><span>Lanches</span></h2>
        </div>

        {/* Subpage Call Component */}
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
