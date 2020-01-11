import { DEFAULT_FONT } from '../../configs/constants'
import colors from '../../configs/colors'
import { translator } from '../../localization'

export default style = {
  container: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center'
  },
  header: {
    fontFamily: DEFAULT_FONT,
    fontSize: 18,
    color: colors.blue,
    marginBottom: 10
  },
  phoneInput: {
    placeholder: translator.translate('mobile')
  },
  passInput: {
    placeholder: translator.translate('password'),
    secureTextEntry: true,
  },
  checkBox: {
    alignSelf: 'flex-start',
    marginLeft: 5
  },
  checkBoxText: {
    fontFamily: DEFAULT_FONT,
  },
  button: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10
  },
  forgotPassword: {
    fontFamily: DEFAULT_FONT,
    fontSize: 16,
    marginVertical: 5,
  },
  createNewAccount: {
    fontFamily: DEFAULT_FONT,
    fontSize: 18,
    marginTop: 5,
    color: colors.green
  }
}
