import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Image from 'react-native-fast-image'

import Images from '../Images'

// Styles
import styles from './Styles/SpecificationStyle'
import { apply } from '../Themes/OsmiProvider'

const Specification = props => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={props.image} style={apply('w-21 h-19')} resizeMode='stretch' />
      </View>
      <View style={apply('ml-3')}>
        <Text style={styles.specLabel}>{props.title}</Text>
        <Text style={styles.specInfo}>{props.value}<Text style={apply('text-sm')}>{props.optional}</Text></Text>
      </View>
    </View>
  )
}

// Prop type warnings
Specification.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

// Defaults for props
Specification.defaultProps = {
  image: Images.bed_black,
  title: '',
  value: '',
}

export default memo(Specification)
