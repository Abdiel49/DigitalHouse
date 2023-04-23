import {StyleSheet} from 'react-native';

import normalize from '@helpers/normalizeFontSize';
import {Colors} from './colors';

export const gStyles = StyleSheet.create({
  mb: {
    marginBottom: normalize(20),
  },
  mb2: {
    marginBottom: normalize(10),
  },
  mt: {
    marginTop: normalize(20),
  },
  mr: {
    marginRight: normalize(10),
  },
  ml: {
    marginLeft: normalize(10),
  },
  mt2: {
    marginTop: normalize(10),
  },
  mh: {
    marginHorizontal: normalize(20),
  },
  mh2: {
    marginHorizontal: normalize(20),
  },
  mv: {
    marginVertical: normalize(30),
  },
  mv2: {
    marginVertical: normalize(15),
  },
  pb: {
    paddingBottom: normalize(10),
  },
  pt: {
    paddingTop: normalize(10),
  },
  ph: {
    paddingHorizontal: normalize(10),
  },
  pv: {
    paddingVertical: normalize(16),
  },
  mainScreen: {
    flex: 1,
  },
  background: {
    backgroundColor: Colors.white,
  },
  mainBackground: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  buttonBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: normalize(60),
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceAround: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});