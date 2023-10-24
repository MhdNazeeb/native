import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevetedCards from './components/ElevetedCards';
import FancyCards from './components/FancyCards';

function App():JSX.Element {
 
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevetedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
