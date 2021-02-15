/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useNetInfo} from "@react-native-community/netinfo";

import { createStore } from "redux";
import { Provider } from "react-redux";
import  Reducer from "./src/store/Reducer"
import Navigation from './src/navigation/Navigation';
import ErrorPage from './src/layout/ErrorPage';

const store = createStore(Reducer)


const App = () => {
  const netInfo = useNetInfo()
    return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        {netInfo.isConnected ? <Navigation />: <ErrorPage />}
      </SafeAreaView>
    </Provider>
  );

};


export default App;
