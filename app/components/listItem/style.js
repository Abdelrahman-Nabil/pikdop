import colors from '../../configs/colors'
import { DEFAULT_FONT, FONT } from '../../configs/constants'
import isRTL from '../../localization'

let rtl = isRTL()
export default style = {
  container: {
    width: '100%',
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 8,
    marginVertical: 6,
    justifyContent: 'center',
    padding: 5

  },
  itemImage: {
    width: 80,
    height: 100,
    borderRadius: 12,
    alignSelf: 'center',
    marginRight: 5
  },
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  textContainer: {
    flex: 1
  },
  itemName: {
    fontFamily: DEFAULT_FONT,
    color: colors.black,
    textAlign: 'left',
    writingDirection: rtl ? 'rtl' : 'ltr'
  },
  transportContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  transportCircleStyle: {
    width: 12,
    height: 12,
    borderRadius: 6
  },
  transportDotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3
  },
  icon: {
    name: 'event-note',
    size: 22,
    color: colors.orange
  },
  dateContainer: {
    flexDirection: 'row',
    color: colors.black,
    textAlign: 'left',
    writingDirection: rtl ? 'rtl' : 'ltr'
  },
  transportText: {
    fontFamily: DEFAULT_FONT,
    color: colors.fadeGray,
    textAlign: 'left',
    writingDirection: rtl ? 'rtl' : 'ltr'
  },
  transportTextContainer: {
  },
  date: {
    fontFamily: DEFAULT_FONT,
    color: colors.black,
    fontSize: FONT.xSmall,
    textAlign: 'left',
    writingDirection: rtl ? 'rtl' : 'ltr'
  },
  straightLine: {
    width: '98%',
    height: 2,
    marginVertical: 4,
    backgroundColor: colors.gray,
  },
  weightCapacity: {
    //color: colors.black,
    fontFamily: DEFAULT_FONT,
    fontSize: FONT.xSmall,
    flexWrap: 'wrap',
    textAlign: 'left',
    writingDirection: rtl ? 'rtl' : 'ltr'
  },
  authorContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  bottomContainer: {
    flexDirection: 'row',

  },
  authorImage: {
    width: 34,
    height: 34,
    borderRadius: 6,
  },
  authorName: {
    fontFamily: DEFAULT_FONT,
    fontSize: FONT.medium,
    marginHorizontal: 5,
    flexWrap: 'wrap',
    textAlign: rtl ? 'right' : 'left',
    writingDirection: rtl ? 'rtl' : 'ltr'
  },
  button: {
    height: 34,
    width: 120
  }
}
