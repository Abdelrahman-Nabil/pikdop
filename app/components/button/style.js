import colors from '../../configs/colors'
import { DEFAULT_FONT } from '../../configs/constants'

export default style = {
  container: {
    width: 80,
    height: 40,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,

  },
  label: {
    fontFamily: DEFAULT_FONT,
    color: colors.white,
    fontSize: 16
  },
  gradientColors: [
    colors.orange,
    colors.lightOrange
  ]
}
