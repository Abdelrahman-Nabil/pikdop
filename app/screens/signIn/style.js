import { DIMENSIONS } from '../../configs/constants'
import colors from '../../configs/colors'

export default style =  {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  imageBackground: {
    width: DIMENSIONS.width,
    height: DIMENSIONS.width * 0.64,
    marginTop: -40,
    position: 'absolute'
  },
  logo: {
    width: 228,
    height: 77,
    alignSelf: 'center'
  },
  loginForm: {
    justifyContent: 'flex-end',
    marginVertical: 20,
    flex: 1

  },
  footerImagesContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  packagesImage: {
    width: DIMENSIONS.width * 0.4,
    height: 100
  }
}
