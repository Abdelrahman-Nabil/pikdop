import React, { Component } from 'react'
import { View, Text } from 'react-native'
import GradientButton from '../button/gradientButton'
import style from './style'
import FastImage from 'react-native-fast-image'
import Icon from '../icon'
import TransportDots from '../transportDots/transportDots'
import * as Animatable from 'react-native-animatable'
import moment from 'moment'
import { translator } from '../../localization'

export default class ListItem extends Component{

  render(){
    let props = this.props
    return (
      <Animatable.View
        animation = 'fadeInDown'
        duration = {500}
        style = {style.container}>
        <View style = {style.imageContainer}>
          {props.productImage && <FastImage
            style = {style.itemImage}
            source = {{uri: props.productImage}}
            onError = {() => {}}
            resizeMode={FastImage.resizeMode.cover}
          />}

          <View style = {style.textContainer}>
            {props.shipmentName && <Text style = {style.itemName}>
              {props.shipmentName}
            </Text>}

            <View style = {style.transportContainer}>
              <TransportDots
                circleStyle = {style.transportCircleStyle}
                dotStyle = {style.transportDotStyle}
                length = {{ height: 10 }}
              />
              <View style = {style.transportTextContainer}>
                <Text numberOfLines = {1} style = {style.transportText}>{props.fromCity.name}</Text>
                <Text numberOfLines = {1} style = {style.transportText}>{props.toCity.name}</Text>
              </View>
            </View>

            <View style = {style.dateContainer}>
              <Icon
                {...style.icon}
              />
              <Text style = {style.date}>{`${translator.translate('date')}: ${moment(props.travelDate).format('YYYY-MM-DD')}`}</Text>
            </View>

          </View>
          <Text style = {style.weightCapacity}>{`${translator.translate('weight')}: ${props.weight || translator.translate('unknown')}`}</Text>
        </View>

        <View style = {style.straightLine} />

        <View style = {style.authorContainer}>
          <View style = {style.bottomContainer}>
            {props.user.image && <FastImage
              source = {{uri: props.user.image}}
              style = {style.authorImage}
            />}
            <Text style = {style.authorName}>
              {props.user.firstName}
            </Text>
          </View>
          <GradientButton
            label = {props.buttonLabel}
            onPress = {props.onConfirm}
            style = {style.button}
          />
        </View>

      </Animatable.View>
    )
  }
}

ListItem.defaultProps = {
  authorName: translator.translate('unknown'),
  buttonLabel: translator.translate('show'),
  fromCity: {},
  toCity: {},
  weight: translator.translate('unknown'),
  user: {}
}
