import colors from  '../../configs/colors'
import { DEFAULT_FONT } from '../../configs/constants'
import isRTL from '../../localization'

let rtl = isRTL()
export default style = {
  container: {
    borderRadius: 12,
    padding: 5,
    width: '100%',
    backgroundColor: colors.gray,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInputProps: {
    placeholder: '',
    placeholderTextColor: colors.orange,
    fontFamily: DEFAULT_FONT,
    textAlign: rtl ? 'right' : 'left',
    writingDirection: rtl ? 'rtl' : 'ltr',
    flex: 1,
    fontSize: 16

  },
  icon: {
    alignSelf: 'center'
  }
}
