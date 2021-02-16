import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'flex bg-soft-gray',
  image: 'full h-200 bg-gray',
  page: 'absolute z-10 bottom-4 left-4 px-3 py-1 bg-black-85 rounded-md',
  pageLabel: 'text-white demi',

  summary: 'p-3 mb-4 bg-white rounded-10 shadow-md',
  title: 'regular text-base text-black mb-1',
  price: 'bold text-2xl text-black mb-2 pb-2 border-b border-gray',
  row: 'row items-center',
  type: 'regular text-black mb-1',
  address: 'text-xxs regular text-gray',
  location: 'w-50 h-35',

  info: 'mb-4 bg-white shadow-md',
  tabHeaderWrapper: 'mt-3 pt-3 row justify-between',
  tabHeader: 'flex pb-3 border-b-2 border-white',
  textHeader: 'text-center demi text-black',
  menu: 'py-3 mx-3 border-t border-gray row items-center',
  specRow: 'row items-center mr-3 mb-2',
  icon: 'w-18 h-23 mr-3',
  regular: 'text-black regular flex',

  lock: 'mb-4 bg-white shadow-md p-3',
  iconLock: 'w-11 h-13 mr-3',
  label: 'text-black demi',
  warn: 'text-gold regular mt-3 mb-4',

  btnPromoWrapper: 'bg-gray items-center justify-center',
  btnPromo: 'bg-black rounded-lg mx-3 my-2 py-3 justify-center shadow-md row',
  btnPromoLabel: 'text-white demi text-base ml-3',
})
