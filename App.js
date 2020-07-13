/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {Button} from 'native-base'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {Button} from 'native-base'
import Main from './src/components/Torch'

const App: () => React$Node = () => {
  return (
    <>
  <Main/>
    </>
  );
};


export default App;
