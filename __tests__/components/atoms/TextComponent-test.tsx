import React from 'react';
import {render} from '@testing-library/react-native';
import {TextComponentProps} from '@types';
import TextComponent from '@components/atoms/TextComponent';
// import TextComponent, { TextComponentProps } from './TextComponent'; // Asegúrate de importar correctamente el componente y su interfaz

describe('TextComponent', () => {
  const defaultProps: TextComponentProps = {
    text: 'Hello World',
  };

  it('renders correctly with default props', () => {
    const {getByText} = render(<TextComponent {...defaultProps} />);

    const textElement = getByText('Hello World');

    expect(textElement).toBeDefined();
  });

  it('applies styles based on props', () => {
    const props: TextComponentProps = {
      text: 'Styled Text',
      title: true,
      body: true,
      medium: true,
      small: true,
      grey: true,
      center: true,
      bold: true,
      textWhite: true,
      isUnderline: true,
      uppercase: true,
      capitalize: true,
      alingLeft: true,
      numberOfLines: 2,
    };

    const {getByText} = render(<TextComponent {...props} />);

    const textElement = getByText('Styled Text');

    expect(textElement).toBeDefined();
  });
});
