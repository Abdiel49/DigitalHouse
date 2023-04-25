import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ButtonComponentProps} from '@types';
import ButtonComponent from '@components/atoms/ButtonComponent';

describe('ButtonComponent', () => {
  const mockOnPress = jest.fn();
  const props: ButtonComponentProps = {
    label: 'Test Button',
    onPress: mockOnPress,
  };

  it('renders correctly', () => {
    const {getByText} = render(<ButtonComponent {...props} />);

    // Comprueba que el botón se ha renderizado correctamente
    const button = getByText('Test Button');
    expect(button).toBeTruthy();

    // Comprueba que el texto del botón es correcto
    const buttonText = button.children[0].valueOf();
    expect(buttonText).toBe('Test Button');

    // Comprueba que el evento onPress se dispara al presionar el botón
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
