import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ScrollView} from 'react-native';
import {ScreenViewProps} from '@types';
import ScreenView from '@components/atoms/ScreenView';
import TextComponent from '@components/atoms/TextComponent';

// Mock para las funciones callback
const mockHeaderScroll = jest.fn();
const mockHeaderFixed = jest.fn();
const mockEndScrollChildren = jest.fn();

// Props de ejemplo
const testProps: ScreenViewProps = {
  children: <ScrollView testID="scrollviewchild">Children content</ScrollView>,
  scrollStyle: {backgroundColor: 'red'},
  safeAreaStyle: {backgroundColor: 'blue'},
  headerScroll: mockHeaderScroll,
  headerFixed: mockHeaderFixed,
  endScrollChildren: mockEndScrollChildren,
  showLoading: true,
  setShowLoading: jest.fn(),
  withMargiH: true,
  mt: true,
};

describe('ScreenView component', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // Resetea los mocks antes de cada prueba
  });

  test('renders correctly with props', () => {
    const {getByTestId} = render(<ScreenView {...testProps} />);

    // Verificar que se renderice el componente SafeAreaView
    expect(getByTestId('safeareaview')).toBeDefined();

    // Verificar que se renderice el ScrollView dentro del SafeAreaView
    expect(getByTestId('scrollview')).toBeDefined();
  });

  test('renders correctly without optional props', () => {
    const {getByTestId} = render(
      <ScreenView>
        <TextComponent text={'hola'} testID="textchild" />
      </ScreenView>,
    );

    // Verificar que se renderice el componente SafeAreaView
    expect(getByTestId('safeareaview')).toBeDefined();

    // Verificar que se renderice el TextComponent dentro del SafeAreaView
    expect(getByTestId('textchild')).toBeDefined();
  });

  test('calls headerScroll callback when headerScroll prop is provided', () => {
    const {getByTestId} = render(<ScreenView {...testProps} />);

    // Simular evento de scroll en el ScrollView
    fireEvent.scroll(getByTestId('scrollviewchild'));

    // Verificar que la función callback haya sido llamada
    expect(mockHeaderScroll).toHaveBeenCalled();
  });
});
