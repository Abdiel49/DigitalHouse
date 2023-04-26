import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import ButtonComponent from '@components/atoms/ButtonComponent';

import {FilterButtonsProps, ProductsFilterTypes} from '@types';

const FilterButtons = (props: FilterButtonsProps) => {
  const [showFilter, setShowFilter] = useState<ProductsFilterTypes>('all');

  const handleChangeFilter = (filterType: ProductsFilterTypes) => {
    setShowFilter(filterType);
    props.onChangeFilter && props.onChangeFilter(filterType);
  };

  return (
    <View>
      {showFilter !== 'all' ? (
        <ButtonComponent
          label="Todos"
          testID="allBTN"
          onPress={() => handleChangeFilter('all')}
        />
      ) : (
        <View style={styles.row}>
          <ButtonComponent
            testID="winnedBTN"
            label="Ganados"
            onPress={() => handleChangeFilter('winned')}
          />
          <ButtonComponent
            testID="exchangedBTN"
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
