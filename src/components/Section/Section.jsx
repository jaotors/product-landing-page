import clsx from 'clsx'

const Section = ({ id = '', className = '', children }) => {
  return (
    <section id={id} className={clsx('w-full h-screen py-4', className)}>
      {children}
    </section>
  )
}

export default Section
