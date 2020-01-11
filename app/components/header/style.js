import colors from '../../configs/colors'
import { StatusBar, Platform } from 'react-native'

export default style = {
  container: {
    width: '95%',
    padding: 10,
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },

}
