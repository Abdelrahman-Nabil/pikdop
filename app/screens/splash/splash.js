import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import style from './style'
import FastImage from 'react-native-fast-image'

export default class Splash extends Component {

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('signIn')
    }, 2000)
  }
  render(){
    return (
      <SafeAreaView style = {style.container}>
        <FastImage
          source = {require('../../assets/images/2.png')}
          style = {style.imageBackground}
        />
        <FastImage
          source = {require('../../assets/images/pikdop.png')}
          style = {style.logo}
        />
      </SafeAreaView>
    )
  }
}
