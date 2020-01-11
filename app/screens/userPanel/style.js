import colors from '../../configs/colors'
import { FONT, DEFAULT_FONT } from '../../configs/constants'

export default style = {
  container: {
    backgroundColor: colors.white,
    width: '80%',
    flex: 1,
    borderTopRightRadius: 16
  },
  logoContainer: {
    width: '100%',
    height: 132,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 166,
    height: 56
  },
  gradientColors: [
    colors.orange,
    colors.lightOrange
  ],
  showProfileButton: {
    shadowColor: colors.orange,
    shadowOffset: {
    	width: 0,
    	height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.5,
    width: 125,
    elevation: 2,
    marginTop: 5,
    borderRadius: 12,
    alignSelf: 'center'
  },
  showProfileButtonLabel: {
    color: colors.green,
    fontSize: FONT.xSmall,
  },
  rowsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 5,
    marginLeft: 5
  },
  dashedLine: {
    width: 1,
    height: '88%',
    alignSelf: 'flex-end',
    borderWidth:1,
    borderRadius: 1,
    position: 'absolute',
    left: 35,
    bottom: 5,
    borderStyle: 'dashed',
    marginHorizontal: 10,
    borderColor: colors.orange
  },

  detailsText: {
    fontFamily: DEFAULT_FONT,
    fontSize: FONT.small,
    marginLeft: 30
  },
  exitText: {
    fontFamily: DEFAULT_FONT,
    fontSize: FONT.small,
    color: colors.red
  },
  icon: {
    color: colors.orange,
    size: 24,
  },
  exitIcon: {
    color: colors.red,
    size: 24,

  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  }
}
