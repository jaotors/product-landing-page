import CartContextProvider from './context/CartContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <CartContextProvider>
      <div className='flex flex-1 flex-col min-h-screen'>
        <Navbar />
        <h1 className='text-3xl font-black'>
          Hello World, Vite + React + Tailwind
        </h1>
      </div>
    </CartContextProvider>
  )
}

export default App
