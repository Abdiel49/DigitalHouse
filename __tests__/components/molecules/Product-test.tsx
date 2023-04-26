import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Product from '@components/molecules/Product';

import {ProductProps} from '@types';

// Mock the onPress function
const mockOnPress = jest.fn();

// Create a test product data object
const productData = {
  createdAt: '2023-04-26T12:34:56.789Z',
  product: 'Test Product',
  points: 100,
  image: 'https://loremflickr.com/640/480/transport',
  is_redemption: false,
  id: '1',
};

// Define the test props
const testProps: ProductProps = {
  product: productData,
  onPress: mockOnPress,
};

describe('Product component', () => {
  it('renders correctly with product data', () => {
    const {getByTestId} = render(<Product {...testProps} />);

    // Assert that the product image, name, date, points, and redemtion type are rendered correctly
    expect(getByTestId('productImage')).toBeDefined();
    expect(getByTestId('productName')).toBeDefined();
    expect(getByTestId('productDate')).toBeDefined();
    expect(getByTestId('redemtionType')).toBeDefined();
    expect(getByTestId('productPoints')).toBeDefined();
  });

  it('calls onPress when pressed', () => {
    const {getByTestId} = render(<Product {...testProps} />);

    // Simulate press event
    fireEvent.press(getByTestId('productImage'));

    // Assert that the onPress function is called with the correct product data
    expect(mockOnPress).toHaveBeenCalledWith(productData);
  });

  // Add more test cases as needed
});
