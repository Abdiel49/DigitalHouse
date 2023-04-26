import React from 'react';
import {render} from '@testing-library/react-native';
import ImageComponent from '@components/atoms/ImageComponent';
import {ImageComponentProps} from '@types';

describe('ImageComponent', () => {
  const props: ImageComponentProps = {
    source: require('@assets/img/image-icon.png'),
    style: {width: 100, height: 100},
    resizeMode: 'contain',
  };

  it('renders correctly with props', () => {
    const {getByTestId} = render(<ImageComponent {...props} />);

    // Comprueba que la imagen se ha renderizado correctamente
    const image = getByTestId('imageComponent');
    expect(image).toBeTruthy();

    // Comprueba que la fuente de la imagen es correcta
    expect(image.props.source).toEqual(require('@assets/img/image-icon.png'));

    // Comprueba que el estilo de la imagen es correcto
    const imageStyles = image.props.style;
    expect(imageStyles[1]).toEqual({width: 100, height: 100});

    // Comprueba que el resizeMode de la imagen es correcto
    expect(image.props.resizeMode).toEqual('contain');
  });

  it('renders correctly with default props', () => {
    const {getByTestId} = render(
      <ImageComponent source={require('@assets/img/image-icon.png')} />,
    );

    // Comprueba que el resizeMode de la imagen es 'contain' por defecto
    const image = getByTestId('imageComponent');
    expect(image.props.resizeMode).toEqual('contain');
  });

  // Agrega más pruebas según las funcionalidades específicas del componente
});
