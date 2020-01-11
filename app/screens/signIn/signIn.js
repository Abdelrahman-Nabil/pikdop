import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import style from './style'
import colors from '../../configs/colors'
import Header from '../../components/header/header'
import Icon from '../../components/icon'
import LoginForm from '../../components/loginForm/loginForm'
import FastImage from 'react-native-fast-image'
import isRTL from '../../localization'

let rtl = isRTL()
class SignIn extends Component {

  _navigateToApp = () => {
    this.props.navigation.navigate('home')
  }
  renderLeftButton = () => (
    <Icon
      name = {rtl ? 'arrow-forward' : 'arrow-back'} size = {36} style = {{ color: colors.white }}
      onPress = {this.props.navigation.goBack}
    />
  )

  render(){
    return (
      <SafeAreaView style = {style.container}>
        <FastImage
          style = {style.imageBackground}
          source = {require('../../assets/images/3.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Header
          renderLeftButton = {this.renderLeftButton}
        />

        <FastImage
          style = {style.logo}
          source = {require('../../assets/images/pikdop2.png')}
        />
        <LoginForm
          style = {style.loginForm}
          onConfirm = {this._navigateToApp}
        />
        <View style = {style.footerImagesContainer}>
          <FastImage
            style = {[style.packagesImage, {transform: [{rotateY: '180deg'}]}]}
            source = {require('../../assets/images/packages.png')}
          />
          <FastImage
            style = {style.packagesImage}
            source = {require('../../assets/images/packages.png')}
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default SignIn
