import {Dimensions, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  mainContainer: {
    position: 'relative',
    width: windowWidth,
    minHeight: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    paddingBottom: 11,

    backgroundColor: '#1D2226',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  emptyBlock: {
    flexGrow: 1,
  },
});
