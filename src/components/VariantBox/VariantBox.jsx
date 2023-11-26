import COLORS from '../../fixtures/COLORS'

const VariantBox = ({
  type = '',
  color = 'black',
  isActive = false,
  children,
}) => {
  return (
    <div
      className='w-7 h-7 flex justify-center items-center border-2 rounded border-transparent text-sm border-gray-200'
      style={{
        border: isActive
          ? '1px solid rgb(220, 38, 38)'
          : '1px solid rgb(229 231 235)',
      }}
    >
      {type === 'color' ? (
        <div
          style={{ backgroundColor: COLORS[color] }}
          className='w-full h-full'
        />
      ) : (
        children
      )}
    </div>
  )
}

export default VariantBox
