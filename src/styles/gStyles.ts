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
  safeArea: {
    flex: 1,
  },
  mainScreen: {
    // flex: 1,
    paddingBottom: normalize(20),
  },
  ap: {
    // paddingTop: normalize(10),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(10),
  },
  pt2: {
    paddingTop: normalize(10),
  },
  paddingHS: {
    paddingHorizontal: normalize(20),
  },
  gap10: {
    gap: normalize(10),
  },
  gap20: {
    gap: normalize(20),
  },
  gap30: {
    gap: normalize(30),
  },
  radius10: {
    borderRadius: normalize(10),
  },
  background: {
    backgroundColor: Colors.background,
  },
  mainBackground: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
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
  shadown1: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
});
