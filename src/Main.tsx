import React from 'react';
import AppNavigation from '@navigation/AppNavigation';
import {Provider} from 'react-redux';

import store from '@redux/store';

const Main = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default Main;
