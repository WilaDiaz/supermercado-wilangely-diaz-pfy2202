import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import AddProduct from './pages/AddProduct'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import { About, Stores } from './pages/Info'
function NotFound(){return <div className="py-20 text-center"><h1 className="text-3xl font-black">Página no encontrada</h1><a className="mt-4 inline-block font-bold text-emerald-700" href="/">Volver al inicio</a></div>}
export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/inventario" element={<Inventory/>}/><Route path="/agregar" element={<AddProduct/>}/><Route path="/producto/:id" element={<ProductDetail/>}/><Route path="/carrito" element={<Cart/>}/><Route path="/nosotros" element={<About/>}/><Route path="/tiendas" element={<Stores/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>}
