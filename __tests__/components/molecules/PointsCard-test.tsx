import React from 'react';
import {render} from '@testing-library/react-native';
import PointsCart from '@components/molecules/PointsCart';
import {PointsCartProps} from '@types';

describe('PointsCart', () => {
  const defaultProps: PointsCartProps = {
    mounth: 'April',
    points: 1000,
  };

  it('renders correctly with default props', () => {
    const {getByTestId} = render(<PointsCart {...defaultProps} />);

    const monthText = getByTestId('mounth');
    const pointsText = getByTestId('points');

    expect(monthText).toBeDefined();
    expect(pointsText).toBeDefined();
  });

  it('renders correctly with custom props', () => {
    const customProps: PointsCartProps = {
      mounth: 'May',
      points: 500,
    };

    const {getByTestId} = render(<PointsCart {...customProps} />);

    const monthText = getByTestId('mounth');
    const pointsText = getByTestId('points');

    expect(monthText).toBeDefined();
    expect(pointsText).toBeDefined();

    expect(monthText.children[0]).toBe(customProps.mounth);
    expect(pointsText.children[0]).toBe(`${customProps.points}.00 pts.`);
  });
});
