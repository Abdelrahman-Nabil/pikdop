import React, { Component } from 'react'
import { View } from 'react-native'
import style from './style'

export default class TransportDots extends Component {
  render(){
    let props =  this.props
    return (
      <View style = {[style.container, props.style]}>
        <View style = {[style.circle, props.circleStyle]}>
          <View style = {[style.dot, props.dotStyle]} />
        </View>
        <View style = {[style.dashedLine, props.length]} />
        <View style = {[style.circle, props.circleStyle]} />
      </View>
    )
  }
}
