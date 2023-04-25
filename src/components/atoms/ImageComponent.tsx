import {Image, StyleSheet} from 'react-native';
import React from 'react';

import normalize from '@helpers/normalizeFontSize';
import {ImageComponentProps} from '@types';

const ImageComponent = (props: ImageComponentProps) => {
  return (
    <Image
      {...props}
      testID="imageComponent"
      source={props.source}
      style={[styles.image, props.style]}
      resizeMode={props.resizeMode || 'contain'}
    />
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: normalize(300),
  },
});
