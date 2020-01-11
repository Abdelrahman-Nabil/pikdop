import colors from '../../configs/colors'

export default style = {
  container: {
    padding: 5,
    alignItems: 'center',
    alignSelf: 'center'
  },
  circle: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: colors.black,
    borderRadius: 4
  },
  dashedLine: {
    width: 1,
    height: 50,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: colors.orange,
    borderStyle: 'dashed',
    alignSelf: 'center',
    marginVertical: 2
  }
}
