import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { TOUCHABLE_OPACITY } from '../configs/constants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'

export default class Icon extends Component {
  render(){
    let props = this.props
    return (
      <TouchableOpacity
        activeOpacity = {TOUCHABLE_OPACITY}
        onPress = { props.onPress }
      >
        <MaterialIcons {...props} />
      </TouchableOpacity>
    )
  }
}

Icon.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  size: PropTypes.number,
  iconStyle: PropTypes.object,
  containerStyle: PropTypes.object
}

Icon.defaultProps = {
  onPress: () => {},
  name: 'help',
  size: 36,
  iconStyle: {},
  containerStyle: {}
}
