import colors from '../../configs/colors'
import { DEFAULT_FONT, FONT } from '../../configs/constants'
import { translator } from '../../localization'

export default style = {
  container: {
    width: '90%',
    borderRadius: 8,
    backgroundColor: colors.white,
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: colors.gray
  },
  inputsContainer: {
    flex: 1,
    padding: 5
  },
  input: {
    marginVertical: 5
  },
  upperContainer: {
    flexDirection: 'row',
  },
  transportDots: {
    alignSelf: 'center'
  },
  dropDownsContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dropdown: {
    backgroundColor: colors.gray,
    width: '45%',
    height: 40,
    borderRadius: 8,
    margin: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dropdownText: {
    color: colors.orange,
    fontFamily: DEFAULT_FONT,
    fontSize: FONT.small
  },
  inputText: {
    placeholderTextColor: colors.darkGray,
    fontFamily: DEFAULT_FONT,
    placeholder: translator.translate('fromCity')
  },
  inputText2: {
    placeholderTextColor: colors.darkGray,
    fontFamily: DEFAULT_FONT,
    placeholder: translator.translate('toCity')
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchButton: {
    width: '45%',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    margin: 5,
    justifyContent: 'center'
  },
  calendarButton: {
    width: '45%',
    height: 40,
    borderRadius: 8,
    padding: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.orange
  },
  calendarButtonLabel: {
    color: colors.orange,
  },
  calendarButtonInnerContainer:{
    justifyContent: 'space-between',
    padding: 5
  }

}
