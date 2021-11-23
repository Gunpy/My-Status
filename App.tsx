// Component
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// Modules
import Router from './src/routes/Router';
import {rootReducer} from './src/store';

// Styles
import styles from './App.styles';

export const store = createStore(rootReducer);

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <View style={styles.main}>
          <Router />
        </View>
      </Provider>
    </View>
  );
};

export default App;
