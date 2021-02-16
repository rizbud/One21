import React, { useState, useRef, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import {
  TouchableOpacity,
  RefreshControl,
  StatusBar,
  FlatList,
  Text,
  View
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import Icon from 'react-native-vector-icons/Feather'
import Image from 'react-native-fast-image'
import ViewPager from '@react-native-community/viewpager'

import StaticDataActions from '../Redux/StaticDataRedux'

// Components
import ListingCard from '../Components/ListingCard'

import Images from '../Images'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const HomeScreen = props => {
  const { listing, favorite, archive } = props
  const viewPager = useRef()
  const [page, setPage] = useState(0)

  useEffect(() => {
    props.getListing()
    props.getFavorite()
    props.getArchive()
  }, [])

  const refresh = useCallback(() => {
    props.getListing()
    props.getFavorite()
    props.getArchive()
  }, [])

  const List = useCallback((props) => (
    <FlatList
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={false} onRefresh={refresh} />}
      data={props.data}
      keyExtractor={item => item?.id?.toString()}
      renderItem={({ item }) => <ListingCard favorite={props.favorite} item={item} />}
      contentContainerStyle={apply('pt-5 bg-gray-100')}
    />
  ), [listing])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={apply('white')} />
      <View style={styles.head}>
        <TouchableOpacity activeOpacity={0.9} style={styles.back}>
          <Icon name='arrow-left' size={25} />
        </TouchableOpacity>
        <View style={styles.profile}>
          <View style={styles.profilePic}>
            <Image
              source={{ uri: "https://i.ibb.co/6NNKzxt/profile-rounded.png" }}
              style={apply('w-64 h-64 rounded-full')}
            />
          </View>
          <Text style={styles.name}>Henry Scott</Text>
          <Text style={styles.member}>Member Broker Century 21 BSD City</Text>
        </View>
        <View style={styles.tabHeaderWrapper}>
          <TouchableOpacity
          onPress={() => viewPager.current.setPage(0)}
          activeOpacity={0.9}
          style={[
            styles.tabHeader,
            page === 0 && apply('border-gold')
          ]}>
            <Text style={[styles.textHeader, page === 0 && apply('text-gold')]}>Listing</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => viewPager.current.setPage(1)}
          activeOpacity={0.9}
          style={[
            styles.tabHeader,
            page === 1 && apply('border-gold')
          ]}>
            <Text style={[styles.textHeader, page === 1 && apply('text-gold')]}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => viewPager.current.setPage(2)}
          activeOpacity={0.9}
          style={[
            styles.tabHeader,
            page === 2 && apply('border-gold')
          ]}>
            <Text style={[styles.textHeader, page === 2 && apply('text-gold')]}>Arsip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ViewPager
      ref={viewPager}
      style={apply('flex w/100')}
      initialPage={0}
      onPageSelected={e => setPage(e.nativeEvent.position)}>
        <View key='1' style={apply('flex')}>
          <List data={!listing?.fetching ? listing?.data : []} />
        </View>
        <View key='2' style={apply('flex')}>
          <List favorite={true} data={!favorite?.fetching ? favorite?.data : []} />
        </View>
        <View key='3' style={apply('flex')}>
          <List data={!archive?.fetching ? archive?.data : []} />
        </View>
      </ViewPager>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  listing: state.staticData.listing,
  favorite: state.staticData.favorite,
  archive: state.staticData.archive,
})

const mapDispatchToProps = dispatch => ({
  getListing: () => dispatch(StaticDataActions.getListingRequest()),
  getFavorite: () => dispatch(StaticDataActions.getFavoriteRequest()),
  getArchive: () => dispatch(StaticDataActions.getArchiveRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
