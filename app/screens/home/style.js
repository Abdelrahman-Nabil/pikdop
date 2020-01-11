import { DIMENSIONS } from '../../configs/constants'
import colors from '../../configs/colors'

export default style = {
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
    width: 108,
    height: 36
  },
  buttonsContainer: {
    backgroundColor: colors.gray,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5
  },
  button: {
    width: '30%',
    borderWidth: 1,
    margin: 5,
    height: 30,
    marginHorizontal: 20,
    borderRadius: 12
  },
  altButtonActive: {
    borderColor: colors.orange,
  },
  altButtonInactive: {
    borderColor: colors.fadeGray,
  },
  altButtonLabelActive: {
    color: colors.orange
  },
  altButtonLabelInactive: {
    color: colors.fadeGray
  },
  altButtonInnerActive: {
    backgroundColor: colors.white,
  },
  altButtonInnerInactive: {
    backgroundColor: colors.white,
  },
  itemList: {
    width: '90%'
  },
  userPanel: {
    margin: 0,
    height: '100%',
  }
}
