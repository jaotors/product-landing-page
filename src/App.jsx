import CartContextProvider from './context/CartContext'
import Navbar from './components/Navbar'
import { Home, TheProduct } from './pages'

function App() {
  return (
    <CartContextProvider>
      <div className='flex flex-1 flex-col min-h-screen'>
        <Navbar />
        <Home />
        <TheProduct />
      </div>
    </CartContextProvider>
  )
}

export default App
