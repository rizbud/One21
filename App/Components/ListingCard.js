import React, { memo } from 'react'
import PropTypes from 'prop-types'
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
  const { item } = props

  return (
    <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => navigation.navigate('DetailScreen')}
    style={styles.card}>
      <View style={styles.header}>
        <View style={styles.profilePic}>
          <Image source={{ uri: item?.profile_pic }} style={apply('w-40 h-40 bg-gray')} />
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.member}>{item?.member}</Text>
        </View>
        <Icon name='ellipsis-vertical' size={20} />
      </View>

      <View style={styles.image}>
        <Image source={{ uri: item?.image }} style={styles.image} />
        {item?.commission && (
          <View style={styles.commission}>
            <Text style={styles.comText}>Komisi</Text>
            <Text style={styles.percent}>{item?.commission}</Text>
          </View>
        )}
        {item?.marked && (
          <View style={styles.mark}>
            <View style={styles.marked}>
              <Text style={styles.markLabel}>{item?.marked}</Text>
            </View>
          </View>
        )}
      </View>

      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.title}>{item?.title}</Text>
          {item?.private && <Text style={styles.private}>PRIVATE</Text>}
        </View>
        <Text style={styles.price}>
          Rp {item?.price?.toLocaleString('id')}{item?.paid_rent && '/' + item?.paid_rent}
        </Text>
        <View style={[styles.row, apply('mb-1')]}>
          <Text style={styles.productType}>{item?.product_type}</Text>
          <Text style={[styles.offerType, item?.offer_type === 'Disewa' && apply('bg-teal')]}>{item?.offer_type}</Text>
        </View>
        <View style={styles.row}>
          <Icon name='location-outline' size={16} color={apply('gray')} />
          <Text numberOfLines={2} style={styles.address}>{item?.address}</Text>
        </View>
      </View>

      <View style={styles.spec}>
        <View style={apply('flex border-r mx-1 border-gray')}>
          <View style={styles.row}>
            <Image source={Images.bed} style={apply('w-21 h-19')} resizeMode='stretch' />
            <Text style={styles.specLabel}>{item?.bed}</Text>
          </View>
          <Text style={styles.specInfo}>K. Tidur</Text>
        </View>
        <View style={apply('flex border-r mx-1 border-gray')}>
          <View style={styles.row}>
            <Image source={Images.bath} style={apply('w-21 h-19')} resizeMode='stretch' />
            <Text style={styles.specLabel}>{item?.bath}</Text>
          </View>
          <Text style={styles.specInfo}>K. Mandi</Text>
        </View>
        <View style={apply('flex mx-1')}>
          <View style={styles.row}>
            <Image source={Images.area} style={apply('w-21 h-19')} resizeMode='stretch' />
            <Text style={styles.specLabel}>{item?.area}<Text style={apply('text-xs')}>M</Text></Text>
          </View>
          <Text style={styles.specInfo}>L. Tanah</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

// Prop type warnings
ListingCard.propTypes = {
  item: PropTypes.object.isRequired,
}

// Defaults for props
ListingCard.defaultProps = {
  item: false
}

export default memo(ListingCard)
