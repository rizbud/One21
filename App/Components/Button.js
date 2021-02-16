import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native'

// Styles
import styles from './Styles/ButtonStyle'
import { apply } from '../Themes/OsmiProvider'

const Button = props => {
  const { darkBg, ...restProps } = props
  const { style } = restProps

  return Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {props.children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple(apply(darkBg ? 'white' : 'white-soft'))}
    {...props}>
      <View style={style}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  darkBg: PropTypes.bool,
  style: PropTypes.object
}

Button.defaultProps = {
  children: null,
  darkBg: false,
}

export default memo(Button)