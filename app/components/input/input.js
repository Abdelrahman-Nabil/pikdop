import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import Icon from '../icon'
import { TOUCHABLE_OPACITY } from '../../configs/constants'
import colors from  '../../configs/colors'
import PropTypes from 'prop-types'
import style  from './style'

export default class Input extends Component {

  render(){
    let props = this.props
    return (
      <View
        activeOpacity = {TOUCHABLE_OPACITY}
        style = {[style.container, props.containerStyle]}
      >

        <TextInput
          {...style.textInputProps}
          {...props.textInputProps}
        />
        {props.icon && <Icon {...style.icon}{...props.icon} />}

      </View>
    )
  }
}
Input.defaultProps = {
  containerStyle: {},
  textInputProps: {}
}
Input.propTypes = {
  containerStyle: PropTypes.object,
  textInputProps: PropTypes.object
}
