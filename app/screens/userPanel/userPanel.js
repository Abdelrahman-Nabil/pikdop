import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import Button from '../../components/button/button'
import Icon from '../../components/icon'
import { translator } from '../../localization'



const Row = (props) => (
    <TouchableOpacity style = {style.row}>
      <Icon {...style.icon} {...props.icon}/>
      <Text style = {{...style.detailsText, ...props.textStyle}}>{props.text}</Text>
    </TouchableOpacity>
)
export default class UserPanel extends Component {
  render(){
    return (
      <View style = {style.container}>
        <LinearGradient
          colors = {style.gradientColors}
          style = {style.logoContainer}>
          <FastImage
            source = {require('../../assets/images/pikdop2.png')}
            style = {style.logo}
            resizeMode = {FastImage.resizeMode.contain}
          />

        </LinearGradient>

        <Button
          label = {translator.translate('viewProfile')}
          onPress = {() => {}}
          style = {style.showProfileButton}
          labelStyle = {style.showProfileButtonLabel}
        />

        <View style = {style.rowsContainer}>
          {Row({ icon: { name: 'home' }, text: translator.translate('main') })}
          {Row({ icon: { name: 'add' }, text: translator.translate('addTravelPlan') })}
          {Row({ icon: { name: 'add' }, text: translator.translate('addShipment') })}
          {Row({ icon: { name: 'bookmark' }, text: translator.translate('orders') })}
          {Row({ icon: { name: 'notifications' }, text: translator.translate('notifications') })}
          {Row({ icon: { name: 'airplanemode-active' }, text: translator.translate('travelPlans') })}
          {Row({ icon: { name: 'local-shipping' }, text: translator.translate('shipments') })}
          {Row({ icon: { name: 'settings' }, text: translator.translate('settings') })}
          {Row({ icon: { name: 'payment' }, text: translator.translate('paymentDetails') })}
          {Row({ icon: { name: 'library-books' }, text: translator.translate('privacyPolicy') })}
          {Row({ icon: { name: 'help' }, text: translator.translate('giveFeedback') })}
          {Row({ icon: { name: 'share' }, text: translator.translate('shareApp') })}
          {Row({ icon: { name: 'exit-to-app', ...style.exitIcon }, text: translator.translate('logout'), textStyle: style.exitText })}

          <View style = {style.dashedLine} />
        </View>

      </View>
    )
  }
}
