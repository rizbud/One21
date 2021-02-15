import { connect } from '../../Themes/OsmiProvider'

export default connect({
  card: 'bg-white py-3 shadow-md mx-3 mb-5 rounded-20',

  header: 'px-3 pb-3 row items-center',
  profilePic: 'w-44 h-44 rounded-full border-gold border items-center justify-center',
  user: 'flex justify-center mx-3',
  name: 'text-black bold text-base',
  member: 'regular',

  image: 'full h-131',
  commission: 'absolute z-10 bg-gold right-4 bottom-4 items-center justify-center rounded-lg px-4 py-1',
  comText: 'text-white regular',
  percent: 'text-white text-2xl bold mt--1',
  mark: 'absolute z-10 items-center justify-center full h-131',
  marked: 'bg-white-85 px-5 py-2 -rotate-15 border-dashed border-2 border-gold rounded-1',
  markLabel: 'text-lg text-gold demi',
  row: 'row items-center',

  summary: 'mx-3 pt-3 pb-3 mb-3 border-b border-gray',
  title: 'regular text-base text-black mb-1',
  price: 'bold text-black text-xl mb-0.5',
  productType: 'text-black demi text-sm mr-2',
  offerType: 'px-3 py-0.5 rounded text-white demi bg-blue-500',
  address: 'text-gray mr-2 text-xs',

  spec: 'mx-3 row items-center justify-between',
  specLabel: 'bold text-black text-base mx-3',
  specInfo: 'regular text-gray text-xs mt-1',
})
