import CartContextProvider from './context/CartContext'
import Navbar from './components/Navbar'
import { Home, TheProduct, Gallery } from './pages'
import Footer from './components/Footer'

function App() {
  return (
    <CartContextProvider>
      <div className='flex flex-1 flex-col min-h-screen'>
        <Navbar />
        <Home />
        <TheProduct />
        <Gallery />
        <Footer />
      </div>
    </CartContextProvider>
  )
}

export default App
