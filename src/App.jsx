import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Admin from './Pages/Admin/Admin'
import OfferZone from './Pages/OfferZone/OfferZone'
import TrendZone from './Pages/TrendZone/TrendZone'
import ProductCategory from './Pages/ProductCategory/ProductCategory'
import ShowProduct from './Pages/ShowProduct/ShowProduct'

function App() {

  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/product/:id" element={<ShowProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/offerzone" element={<OfferZone />} />
          <Route path="/trendzone" element={<TrendZone />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
