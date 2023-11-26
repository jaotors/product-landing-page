import clsx from 'clsx'

const Section = ({ id = '', className = '', children }) => {
  return (
    <section id={id} className={clsx('w-full h-auto sm:h-screen py-4 mt-10', className)}>
      {children}
    </section>
  )
}

export default Section
