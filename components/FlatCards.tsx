import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>red Click</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>red Click</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>red Click</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>red Click</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 13,
  },
  container: {padding: 8, flex: 1, flexDirection: 'row'},
  card: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 4,
  },
  cardOne: {
    width: 100,
    height: 100,
    backgroundColor: '#F25A5A',
  },
  cardTwo: {
    width: 100,
    height: 100,
    backgroundColor: '#8164F6',
  },
  cardThree: {
    width: 100,
    height: 100,
    backgroundColor: '#8AF0A8',
  },
  cardFour: {
    width: 100,
    height: 100,
    backgroundColor: '#F08AE3',
  },
});
