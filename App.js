/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { configureStore } from './components/store/configureStore';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer/MainContainer';

console.warn("principio");
const store = configureStore();
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainContainer />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
