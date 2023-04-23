import {StyleProp, ViewStyle} from 'react-native/types';

export interface ScreenViewProps {
  children?: React.ReactNode;
  scrollStyle?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  endScrollChildren?: () => React.ReactElement;
  showLoading?: boolean;
  setShowLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
