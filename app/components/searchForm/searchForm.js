import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import Icon from '../../components/icon'
import Input from '../input/input'
import style from './style'
import colors from '../../configs/colors'
import TransportDots from '../../components/transportDots/transportDots'
import ModalDropdown from 'react-native-modal-dropdown'
import GradientButton from '../button/gradientButton'
import Button from '../button/button'
import { translator } from '../../localization'

export default class SearchForm extends Component {
  render(){
    let props = this.props
    return (
      <View style = {style.container}>
        <View style = {style.upperContainer}>
          <TransportDots
            style = {style.transportDots}
          />
          <View style = {style.inputsContainer}>
            <Input
              icon = {{
                name: 'flight-takeoff',
                size: 22,
                color: colors.orange
              }}
              textInputProps = {style.inputText}
              containerStyle = {style.input}
            />
            <Input
              icon = {{
                name: 'flight-land',
                size: 22,
                color: colors.orange
              }}
              textInputProps = {style.inputText2}
              containerStyle = {style.input}
            />
          </View>


        </View>
        <View style = {style.dropDownsContainer}>
          <ModalDropdown
            options={[]}
            style = {style.dropdown}
            textStyle = {style.dropdownText}
            defaultValue = {translator.translate('weight')}
          />
          <ModalDropdown
            options={[]}
            style = {style.dropdown}
            textStyle = {style.dropdownText}
            defaultValue = {translator.translate('category')}
          />


        </View>
        <View style = {style.buttonsContainer}>
          <Button
            style = {style.calendarButton}
            icon = {{
              name: 'event-note',
              size: 22,
              color: colors.orange
            }}
            label = {translator.translate('date')}
            labelStyle = {style.calendarButtonLabel}
            innerContainer = {style.calendarButtonInnerContainer}
          />
          <GradientButton
            style = {style.searchButton}
            icon = {{
              name: 'search',
              size: 22,
              color: colors.white
            }}
            label = {translator.translate('search')}
            onPress = {props.onSearch}
          />
        </View>
      </View>
    )
  }
}

SearchForm.defaultProps = {
  onSearch: () => {}
}
