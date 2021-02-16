import React, { useState, useRef, useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import Image from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ViewPager from '@react-native-community/viewpager'
import dayjs from 'dayjs'
import PushNotification from 'react-native-push-notification'

import { formatMoney } from '../Lib/TextUtils'
import Images from '../Images'

// Components
import Button from '../Components/Button'
import Specification from '../Components/Specification'

// Styles
import styles from './Styles/DetailScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const DetailScreen = props => {
  const { item } = props.route.params
  const viewRef = useRef()
  const [img, setImg] = useState(0)
  const [page, setPage] = useState(0)

  const promote = useCallback(() => {
    PushNotification.localNotification({
      title: 'Promosikan Listing',
      message: 'Listing properti anda berhasil dibagikan!'
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.image}>
          <ViewPager
          initialPage={0}
          onPageSelected={e => setImg(e.nativeEvent.position)}
          style={styles.image}>
            <Image key='1' source={{ uri: "https://i.ibb.co/ydqGWSR/Bitmap-2x.png" }} style={styles.image} />
            <Image key='2' source={{ uri: "https://i.ibb.co/ydqGWSR/Bitmap-2x.png" }} style={styles.image} />
            <Image key='3' source={{ uri: "https://i.ibb.co/ydqGWSR/Bitmap-2x.png" }} style={styles.image} />
            <Image key='4' source={{ uri: "https://i.ibb.co/ydqGWSR/Bitmap-2x.png" }} style={styles.image} />
            <Image key='5' source={{ uri: "https://i.ibb.co/ydqGWSR/Bitmap-2x.png" }} style={styles.image} />
          </ViewPager>
          <View style={styles.page}>
            <Text style={styles.pageLabel}>{img+1}/5</Text>
          </View>
        </View>

        <View style={styles.summary}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.price}>
            Rp {formatMoney(item?.price)}
            <Text>{item?.paid_rent && '/' + item?.paid_rent}</Text>
          </Text>
          <View style={styles.row}>
            <View style={apply('flex')}>
              <Text style={styles.type}>{item?.product_type} untuk {item?.offer_type}</Text>
              <View style={styles.row}>
                <Icon name="location" color={apply('gold')} size={14} />
                <Text style={styles.address}>{item?.address}</Text>
              </View>
            </View>
            <Image source={Images.location} style={styles.location} />
          </View>
        </View>

        <View style={styles.info}>
          <View style={styles.tabHeaderWrapper}>
            <TouchableOpacity
            onPress={() => viewRef.current.setPage(0)}
            activeOpacity={0.9}
            style={[
              styles.tabHeader,
              page === 0 && apply('border-gold')
            ]}>
              <Text style={[styles.textHeader, page === 0 && apply('text-gold')]}>Listing Info</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => viewRef.current.setPage(1)}
            activeOpacity={0.9}
            style={[
              styles.tabHeader,
              page === 1 && apply('border-gold')
            ]}>
              <Text style={[styles.textHeader, page === 1 && apply('text-gold')]}>Deskripsi</Text>
            </TouchableOpacity>
          </View>
          <ViewPager
          ref={viewRef}
          initialPage={0}
          style={apply('h/30')}
          onPageSelected={e => setPage(e.nativeEvent.position)}>
            <View key='1' style={apply('flex py-3 px-3')}>
              <View style={styles.specRow}>
                <Specification image={Images.bed_black} title='Kamar Tidur' value='3+1' />
                <Specification image={Images.bath_black} title='Kamar Mandi' value='3+1' />
              </View>
              <View style={styles.specRow}>
                <Specification image={Images.area_black} title='Luas Bangunan' value='250' optional='M2' />
                <Specification image={Images.area_black} title='Luas Tanah' value='300' optional='M2' />
              </View>
              <View style={styles.specRow}>
                <Specification image={Images.area_black} title='(P x L) Bangunan' value='25 x 10' optional='M2' />
                <Specification image={Images.area_black} title='(P x L) Tanah' value='30 x 10' optional='M2' />
              </View>
            </View>
            <View key='2' style={apply('flex p-3')}>
              <Text style={styles.regular}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Porttitor eget dolor morbi non arcu risus quis varius. Nisl vel pretium lectus quam id leo. Pulvinar proin gravida hendrerit lectus a. Dignissim sodales ut eu sem integer vitae justo.
              </Text>
            </View>
          </ViewPager>
          <View style={styles.menu}>
            <Image source={Images.award} style={styles.icon} resizeMode='contain' />
            <Text style={styles.regular}>Sertifikat Hak Milik</Text>
          </View>
          <View style={styles.menu}>
            <Image source={Images.clock} style={styles.icon} resizeMode='contain' />
            <Text style={styles.regular}>Diposting pada: {dayjs('24 December 2019').format('D-MMM-YY')}</Text>
          </View>
        </View>

        <View style={styles.lock}>
          <View style={styles.row}>
            <Image source={Images.lock} style={styles.iconLock} resizeMode='stretch' />
            <Text style={styles.label}>Catatan Internal</Text>
          </View>
          <Text style={styles.warn}>Hanya akan dilihat oleh Marketing satu perusahaan.</Text>
          <Text style={styles.regular}>
            Alamat Details:{'\n'}NavaPark Cluster Moonlight Blok 38D No. 55
          </Text>
        </View>

        <View style={styles.lock}>
          <View style={styles.row}>
            <Image source={Images.lock} style={styles.iconLock} resizeMode='stretch' />
            <Text style={styles.label}>Owner Properti</Text>
          </View>
          <Text style={styles.warn}>Hanya anda yang dapat melihat informasi ini.</Text>
          <Text style={styles.regular}>Nama: <Text style={apply('demi')}>Jois Aprillio</Text></Text>
          <Text style={styles.regular}>No. HP: <Text style={apply('demi')}>081388809999</Text></Text>
          <View style={[styles.row, apply('mt-3')]}>
            <Button style={apply('bg-white rounded-md border border-gray py-2 justify-center flex mr-3 row items-center')}>
              <Image source={Images.phone_black} style={styles.icon} resizeMode='stretch' />
              <Text style={apply('text-black demi')}>Telepon</Text>
            </Button>
            <Button style={apply('bg-white rounded-md border border-gray py-2 justify-center flex ml-3 row items-center')}>
              <Image source={Images.chat} style={styles.icon} resizeMode='stretch' />
              <Text style={apply('text-black demi')}>WhatsApp</Text>
            </Button>
          </View>
        </View>

      </ScrollView>
      <View style={styles.btnWrapper}>
        <Button onPress={promote} darkBg style={styles.btnPromo}>
          <FontAwesome name='share-square-o' color='white' size={23} />
          <Text style={styles.btnPromoLabel}>Promosikan</Text>
        </Button>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
