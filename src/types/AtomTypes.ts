import {StyleProp, TextProps, TextStyle, ViewStyle} from 'react-native/types';

export interface ScreenViewProps {
  children?: React.ReactNode;
  scrollStyle?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  endScrollChildren?: () => React.ReactElement;
  showLoading?: boolean;
  setShowLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TextComponentProps {
  text: string | number;
  title?: boolean;
  body?: boolean;
  medium?: boolean;
  small?: boolean;
  grey?: boolean;
  center?: boolean;
  bold?: boolean;
  style?: StyleProp<TextStyle>;
  props?: TextProps;
  isUnderline?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
  textWhite?: boolean;
  alingLeft?: boolean;
}

export interface ButtonComponentProps {
  label: string;
  onPress?: () => void;
}
