/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './src/navigation';
import { LogBox, StatusBar, SafeAreaView } from 'react-native';
import { sagaMiddleware, store, persistor } from './src/store/store'
import mySaga from './src/redux/saga/sagas';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


sagaMiddleware.run(mySaga);
LogBox.ignoreAllLogs();

// App component
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
        <StatusBar barStyle={'light-content'} />
        <AppNavigator />
        {/* </SafeAreaView> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
