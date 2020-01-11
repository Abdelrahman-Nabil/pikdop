import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from '../icon'
import { TOUCHABLE_OPACITY } from '../../configs/constants'
import style from './style'
import PropTypes from 'prop-types'
import { translator } from '../../localization'

export default class Button extends Component {
  render(){
    let props = this.props
    return (
      <TouchableOpacity
        activeOpacity = {TOUCHABLE_OPACITY}
        onPress = {props.onPress}
        style = {[style.container, props.style]}
      >
        <View
          style = {[style.linearGradient, props.innerContainer]}
        >
          <Text
            style = {[style.label, props.labelStyle]}
          >
            {props.label}
          </Text>
          {props.icon && <Icon {...props.icon}/>}
        </View>
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  onPress: () => {},
  style: {},
  labelStyle: {},
  innerContainer: {},
  label: translator.translate('confirm')
}
Button.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  labelStyle: PropTypes.object,
  innerContainer: PropTypes.object
}
