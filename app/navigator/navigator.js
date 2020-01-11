import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Splash from '../screens/splash/splash'
import SignIn from '../screens/signIn/signIn'
import Home from '../screens/home/home'

const AppNavigator = createStackNavigator({
  splash: {
    screen: Splash,
  },
  signIn: {
    screen: SignIn
  },
  home: {
    screen: Home
  }

}, {
  headerMode: 'none'
})

export default createAppContainer(AppNavigator)
