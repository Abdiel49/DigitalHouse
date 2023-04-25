import {
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native/types';

export interface ScreenViewProps {
  children?: React.ReactNode;
  scrollStyle?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  headerScroll?: () => React.ReactElement;
  headerFixed?: () => React.ReactElement;
  endScrollChildren?: () => React.ReactElement;
  showLoading?: boolean;
  setShowLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  withMargiH?: boolean;
  mt?: boolean;
}

export interface TextComponentProps extends TextProps {
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
  numberOfLines?: number;
}

export interface ButtonComponentProps {
  label: string;
  onPress?: () => void;
}

export interface ImageComponentProps extends ImageProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}
