import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import {useAppDispatch} from '@redux/hooks';
import {filterProductsByRedemtion} from '@redux/slices';

import ButtonComponent from '@components/atoms/ButtonComponent';

import {FilterButtonsProps, ProductsFilterTypes} from '@types';

const FilterButtons = (props: FilterButtonsProps) => {
  const [showFilter, setShowFilter] = useState<ProductsFilterTypes>('all');
  const dispatch = useAppDispatch();

  const handleChangeFilter = (filterType: ProductsFilterTypes) => {
    setShowFilter(filterType);
    props.onChangeFilter && props.onChangeFilter(filterType);
    dispatch(filterProductsByRedemtion(filterType));
  };

  return (
    <View>
      {showFilter !== 'all' ? (
        <ButtonComponent
          label="Todos"
          onPress={() => handleChangeFilter('all')}
        />
      ) : (
        <View style={styles.row}>
          <ButtonComponent
            label="Ganados"
            onPress={() => handleChangeFilter('winned')}
          />
          <ButtonComponent
            label="Canjeados"
            onPress={() => handleChangeFilter('exchanged')}
          />
        </View>
      )}
    </View>
  );
};

export default FilterButtons;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
  },
});
