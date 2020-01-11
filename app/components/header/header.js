import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import style from './style'
import Icon from '../icon'

class Header extends Component {
  render(){
    let props = this.props
    return (
      <View
        style = {style.container}
      >
        {props.renderLeftButton()}
        {props.renderLogo()}
        {props.renderRightButton()}
      </View>
    )
  }
}

export default Header

Header.propTypes = {
  renderLeftButton: PropTypes.func,
  renderLogo: PropTypes.func,
  renderRightButton: PropTypes.func,
}
Header.defaultProps = {
  renderLeftButton: () => {},
  renderLogo: () => {},
  renderRightButton: () => {},
}
