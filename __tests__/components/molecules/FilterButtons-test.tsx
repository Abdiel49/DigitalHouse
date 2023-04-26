import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {FilterButtonsProps} from '@types';
import FilterButtons from '@components/molecules/FilterButtons';

const mockOnChangeFilter = jest.fn();

describe('FilterButtons', () => {
  const defaultProps: FilterButtonsProps = {
    onChangeFilter: mockOnChangeFilter,
  };

  beforeEach(() => {
    mockOnChangeFilter.mockClear();
  });

  it('renders correctly with default props', () => {
    const {getByTestId} = render(<FilterButtons {...defaultProps} />);

    const winnedButton = getByTestId('winnedBTN');
    const exchangedButton = getByTestId('exchangedBTN');

    expect(winnedButton).toBeDefined();
    expect(exchangedButton).toBeDefined();
  });

  it('changes filter and calls onChangeFilter winned', () => {
    const {getByTestId} = render(<FilterButtons {...defaultProps} />);

    const winnedButton = getByTestId('winnedBTN');

    // Simula el tap en el botón "Ganados"
    fireEvent.press(winnedButton);

    expect(mockOnChangeFilter).toHaveBeenCalledWith('winned'); // Verifica si onChangeFilter se llama con el filtro correcto
  });

  it('changes filter and calls onChangeFilter exchanged', () => {
    const {getByTestId} = render(<FilterButtons {...defaultProps} />);

    const exchangedButton = getByTestId('exchangedBTN');

    // Simula el tap en el botón "Ganados"
    fireEvent.press(exchangedButton);

    expect(mockOnChangeFilter).toHaveBeenCalledWith('exchanged'); // Verifica si onChangeFilter se llama con el filtro correcto
  });

  it('changes filter and calls onChangeFilter all', () => {
    const {getByTestId} = render(<FilterButtons {...defaultProps} />);

    const exchangedButton = getByTestId('exchangedBTN');

    // Simula el tap en el botón "Ganados"
    fireEvent.press(exchangedButton);
    expect(mockOnChangeFilter).toHaveBeenCalledWith('exchanged'); // Verifica si onChangeFilter se llama con el filtro correcto

    const allButton = getByTestId('allBTN');
    expect(allButton).toBeDefined();

    mockOnChangeFilter.mockClear();

    fireEvent.press(allButton);
    expect(mockOnChangeFilter).toHaveBeenCalledWith('all'); // Verifica si onChangeFilter se llama con el filtro correcto
  });
});
