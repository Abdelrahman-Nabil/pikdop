import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from '../icon'
import { TOUCHABLE_OPACITY } from '../../configs/constants'
import style from './style'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import { translator } from '../../localization'

export default class GradientButton extends Component {
  render(){
    let props = this.props
    return (
      <TouchableOpacity
        activeOpacity = {TOUCHABLE_OPACITY}
        onPress = {props.onPress}
        style = {[style.container, props.style]}
      >
        <LinearGradient
          style = {style.linearGradient}
          colors = {[...style.gradientColors, ...props.gradientColors]}
        >
          <Text
            style = {[style.label, props.labelStyle]}
          >
            {props.label}
          </Text>
          {props.icon && <Icon {...props.icon}/>}
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

GradientButton.defaultProps = {
  onPress: () => {},
  style: {},
  gradientColors: [],
  labelStyle: {},
  label: translator.translate('confirm')
}
GradientButton.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  gradientColors: PropTypes.array,
  labelStyle: PropTypes.object
}
