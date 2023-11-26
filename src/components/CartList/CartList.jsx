import Item from './Item'

const CartList = ({ items = [] }) => {
  return (
    <ul className='w-full max-h-[16rem] overflow-y-scroll scroll overflow-hidden border-b-2'>
      {items.map((item, idx) => (
        <Item key={item.id + idx} item={item} />
      ))}
    </ul>
  )
}

export default CartList
