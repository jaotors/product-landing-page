import Carousel from '../components/Carousel/Carousel'
import SLIDES from '../fixtures/SLIDES'

const Gallery = () => {
  return (
    <section id='gallery' className='py-11'>
      <h1 className='flex items-center justify-center text-3xl mt-10 mb-8 font-black text-gray-800'>
        Gallery
      </h1>
      <div className='max-w-3xl m-auto'>
        <Carousel items={SLIDES} />
      </div>
    </section>
  )
}

export default Gallery
