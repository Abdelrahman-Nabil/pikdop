import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style  from './style'
import Input from '../input/input'
import colors from '../../configs/colors'
import GradientButton from '../button/gradientButton'
import CheckBox from 'react-native-check-box'
import { TOUCHABLE_OPACITY } from '../../configs/constants'
import { translator } from '../../localization'
import isRTL from '../../localization'

class LoginForm extends Component {
  state = { rememberMe: true }
  render(){
    let props = this.props
    return (
      <View style = {[style.container, props.style]}>
        <Text
          style = {style.header}
        >
          {translator.translate('Login')}
        </Text>
        <Input
          textInputProps = {style.phoneInput}
          icon = {{
            name: 'phone-iphone',
            color: colors.black,
            size: 22
          }}
        />
        <Input
          textInputProps = {style.passInput}
          icon = {{
            name: 'lock',
            color: colors.black,
            size: 22
          }}
        />
        <CheckBox
          style={style.checkBox}
          onClick={()=>{
            this.setState({
                rememberMe:!this.state.rememberMe
            })
          }}
          isChecked={this.state.rememberMe}
          rightTextView={<Text style = {style.checkBoxText}>{translator.translate('rememberMe')}</Text>}
          checkedCheckBoxColor = {colors.orange}
        />
        <GradientButton
          label = {translator.translate('login')}
          onPress = {props.onConfirm}
          style = {style.button}
        />
        <TouchableOpacity
          activeOpacity = {TOUCHABLE_OPACITY}
          onPress = {() => {}}
        >
          <Text style = {style.forgotPassword}>
          {translator.translate('forgotPassword')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity = {TOUCHABLE_OPACITY}
          onPress = {() => {}}
        >
          <Text style = {style.createNewAccount}>
            {translator.translate('dontHaveAccount')}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

LoginForm.defaultProps = {
  style: {},
  onConfirm: () => {}
}
export default LoginForm
