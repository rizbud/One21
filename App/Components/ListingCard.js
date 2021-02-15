import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import Image from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import Images from '../Images'

// Styles
import styles from './Styles/ListingCardStyle'
import { apply } from '../Themes/OsmiProvider'

const ListingCard = props => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => navigation.navigate('DetailScreen')}
    style={styles.card}>
      <View style={styles.header}>
        <View style={styles.profilePic}>
          <Image source={Images.profileRounded1} style={apply('w-40 h-40')} />
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Henry Scott</Text>
          <Text style={styles.member}>Century 21 BSD City</Text>
        </View>
        <Icon name='ellipsis-vertical' size={20} />
      </View>

      <View style={styles.image}>
        <Image source={Images.product} style={styles.image} />
        <View style={styles.commission}>
          <Text style={styles.comText}>Komisi</Text>
          <Text style={styles.percent}>2%</Text>
        </View>
        <View style={styles.mark}>
          <View style={styles.marked}>
            <Text style={styles.markLabel}>TERJUAL</Text>
          </View>
        </View>
      </View>

      <View style={styles.summary}>
        <Text style={styles.title}>Nava Park BSD City</Text>
        <Text style={styles.price}>Rp {(6500000000).toLocaleString('id')}</Text>
        <View style={[styles.row, apply('mb-1')]}>
          <Text style={styles.productType}>Rumah</Text>
          <Text style={styles.offerType}>Dijual</Text>
        </View>
        <View style={styles.row}>
          <Icon name='location-outline' size={16} color={apply('gray')} />
          <Text numberOfLines={2} style={styles.address}>Jl. Edutown Kav III.1, BSD, Tangerang Selatan</Text>
        </View>
      </View>

      <View style={styles.spec}>
        <View style={apply('flex border-r mx-1 border-gray')}>
          <View style={styles.row}>
            <Image source={Images.bed} style={apply('w-21 h-19')} resizeMode='stretch' />
            <Text style={styles.specLabel}>3+1</Text>
          </View>
          <Text style={styles.specInfo}>K. Tidur</Text>
        </View>
        <View style={apply('flex border-r mx-1 border-gray')}>
          <View style={styles.row}>
            <Image source={Images.bath} style={apply('w-21 h-19')} resizeMode='stretch' />
            <Text style={styles.specLabel}>3+1</Text>
          </View>
          <Text style={styles.specInfo}>K. Mandi</Text>
        </View>
        <View style={apply('flex mx-1')}>
          <View style={styles.row}>
            <Image source={Images.area} style={apply('w-21 h-19')} resizeMode='stretch' />
            <Text style={styles.specLabel}>300<Text style={apply('text-xs')}>M</Text></Text>
          </View>
          <Text style={styles.specInfo}>L. Tanah</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

// // Prop type warnings
// ListingCard.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// ListingCard.defaultProps = {
//   someSetting: false
// }

export default memo(ListingCard)
