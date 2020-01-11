import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import Navigator from './app/navigator/navigator'

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import Splash from './app/screens/splash/splash'
import store from './app/redux/store'
import { Provider } from 'react-redux'
import { translator } from './app/localization'

class App extends Component {

  componentDidMount(){
    // StatusBar.setBackgroundColor('transparent')
     StatusBar.setTranslucent(true)
     StatusBar.setBackgroundColor('transparent')
     StatusBar.setBarStyle('light-content')

  }
  render(){
    return (
      <Provider store = {store}>
        <Navigator />
      </Provider>
    )
  }
}

export default App
