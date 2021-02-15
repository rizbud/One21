import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'flex bg-white',
  head: 'shadow-lg bg-white pt-5',
  back: 'full absolute mx-3 mt-3',
  profile: 'px-3 items-center mt-1',
  profilePic: 'w-70 h-70 rounded-full border-gold border items-center justify-center',
  name: 'text-black mt-2 mb-1 demi text-lg',
  member: 'text-black regular',
  tabHeaderWrapper: 'mt-3 pt-3 row justify-between',
  tabHeader: 'flex pb-3 border-b-2 border-white',
  textHeader: 'text-center demi text-black',
})
