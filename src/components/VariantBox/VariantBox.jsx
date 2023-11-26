import clsx from 'clsx'

import COLORS from '../../fixtures/COLORS'

const VariantBox = ({
  type = '',
  color = 'black',
  isActive = false,
  children,
}) => {
  return (
    <div
      className={clsx(
        'w-7 h-7 flex justify-center items-center border-2 rounded border-transparent text-sm',
        isActive ? 'border-red-600' : 'border-gray-200'
      )}
    >
      {type === 'color' ? (
        <div className={clsx('w-full h-full', `bg-[${COLORS[color]}]`)} />
      ) : (
        children
      )}
    </div>
  )
}

export default VariantBox
