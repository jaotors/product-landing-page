const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='p-4 text-center font-medium text-white border-t border-gray-800 bg-gray-800'>
      &copy; {year}
    </footer>
  )
}

export default Footer
