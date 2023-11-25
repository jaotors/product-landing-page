const Section = ({ id = '', className = '', children }) => {
  return (
    <section id={id} className={clsx('w-full h-screen', className)}>
      {children}
    </section>
  )
}

export default Section
