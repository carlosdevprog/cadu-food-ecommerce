import { Routes, Route } from 'react-router-dom'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import DrinksPage from './pages/Main/Drinks'
import IceCreamsPage from './pages/Main/IceCreams'
import FriesPage from './pages/Main/Fries'
import MyCartPage from './pages/MyCart'
import OrderSuccessPage from './pages/Orders/Success'


import MainPage from './pages/Main'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='/pizzas' element={<PizzasPage />} />
        <Route path='/bebidas' element={<DrinksPage />} />
        <Route path='/sorvetes' element={<IceCreamsPage />} />
        <Route path='/batatas' element={<FriesPage />} />
      </Route>
      <Route path='/carrinho' element={<MyCartPage />} />
      <Route path='/success' element={<OrderSuccessPage />} />
    </Routes>
  )
}
