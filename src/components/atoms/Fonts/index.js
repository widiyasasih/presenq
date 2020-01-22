import {StyleSheet} from 'react-native';
import {colors} from '../Colors';

export const fonts = StyleSheet.create({
  topNav: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  titleSection: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#474747',
    textAlign: 'left',
  },
  titleBar: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#474747',
  },
  captionOnCard: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#474747',
  },
  processing: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.schema,
    borderRadius: 4,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 40,
    fontSize: 20,
  },
  titleTextInput: {
    fontSize: 14,
    color: colors.schema,
  },
});
