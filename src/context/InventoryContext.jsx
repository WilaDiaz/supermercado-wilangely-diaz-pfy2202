import { createContext, useContext, useMemo, useState } from 'react'

const InventoryContext = createContext(null)
const initialProducts = [
  { id: 'p1', name: 'Leche entera', brand: 'Campo Claro', category: 'Lácteos', price: 1290, stock: 24, unit: '1 L', description: 'Leche entera pasteurizada, ideal para el desayuno y preparaciones caseras.' },
  { id: 'p2', name: 'Yogur natural', brand: 'Valle Vivo', category: 'Lácteos', price: 890, stock: 18, unit: '125 g', description: 'Yogur natural cremoso, sin saborizantes artificiales.' },
  { id: 'p3', name: 'Manzana Fuji', brand: 'Huerto Sur', category: 'Frutas y verduras', price: 1590, stock: 30, unit: 'kg', description: 'Manzanas frescas, crocantes y de dulzor equilibrado.' },
  { id: 'p4', name: 'Palta Hass', brand: 'Huerto Sur', category: 'Frutas y verduras', price: 3490, stock: 12, unit: 'kg', description: 'Paltas seleccionadas, perfectas para ensaladas y tostadas.' },
  { id: 'p5', name: 'Arroz grano largo', brand: 'Buen Grano', category: 'Abarrotes', price: 1790, stock: 20, unit: '1 kg', description: 'Arroz grano largo, rendidor y fácil de preparar.' },
  { id: 'p6', name: 'Fideos espirales', brand: 'Buen Grano', category: 'Abarrotes', price: 990, stock: 26, unit: '400 g', description: 'Pasta de trigo duro para tus recetas favoritas.' },
  { id: 'p7', name: 'Jugo de naranja', brand: 'Fruta Día', category: 'Bebidas', price: 2190, stock: 14, unit: '1 L', description: 'Jugo de naranja con sabor fresco para compartir.' },
  { id: 'p8', name: 'Agua mineral', brand: 'Cordillera', category: 'Bebidas', price: 790, stock: 40, unit: '1.5 L', description: 'Agua mineral sin gas, en formato familiar.' },
]

export function InventoryProvider({ children }) {
  const [products, setProducts] = useState(initialProducts)
  const [cart, setCart] = useState([])

  function addProduct(product) {
    setProducts(current => [{ ...product, id: crypto.randomUUID() }, ...current])
  }
  function addToCart(productId, quantity = 1) {
    const product = products.find(item => item.id === productId)
    if (!product || quantity < 1 || product.stock < quantity) return false
    setProducts(current => current.map(item => item.id === productId ? { ...item, stock: item.stock - quantity } : item))
    setCart(current => {
      const found = current.find(item => item.id === productId)
      return found ? current.map(item => item.id === productId ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { ...product, quantity }]
    })
    return true
  }
  function changeCartQuantity(productId, delta) {
    const line = cart.find(item => item.id === productId)
    if (!line) return
    if (delta > 0) {
      const product = products.find(item => item.id === productId)
      if (!product || product.stock < delta) return
      setProducts(current => current.map(item => item.id === productId ? { ...item, stock: item.stock - delta } : item))
      setCart(current => current.map(item => item.id === productId ? { ...item, quantity: item.quantity + delta } : item))
    } else {
      const decrease = Math.min(line.quantity, Math.abs(delta))
      setProducts(current => current.map(item => item.id === productId ? { ...item, stock: item.stock + decrease } : item))
      setCart(current => current.flatMap(item => item.id !== productId ? [item] : item.quantity - decrease > 0 ? [{ ...item, quantity: item.quantity - decrease }] : []))
    }
  }
  const value = useMemo(() => ({ products, cart, addProduct, addToCart, changeCartQuantity }), [products, cart])
  return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>
}
export function useInventory() {
  const value = useContext(InventoryContext)
  if (!value) throw new Error('useInventory debe usarse dentro de InventoryProvider')
  return value
}
export const categories = ['Frutas y verduras', 'Lácteos', 'Abarrotes', 'Bebidas', 'Otros']
export const money = amount => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(amount)
