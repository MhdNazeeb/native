import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevetedCards() {
  return (
    <View>
      <Text style={styles.Text}>ElevetedCards</Text>
      <ScrollView horizontal={true} >
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}></View>
          <View style={[styles.card, styles.cardTwo]}></View>
          <View style={[styles.card, styles.cardThree]}></View>

          <View style={[styles.card, styles.cardFour]}></View>
          <View style={[styles.card, styles.cardFive]}></View>
          <View style={[styles.card, styles.cardSix]}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:8
  },
  container: {flex: 1, marginLeft: 10, marginTop: 10, flexDirection: 'row'},
  card: {
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 5,
  },
  cardOne: {
    backgroundColor: '#FFE926',
  },
  cardTwo: {
    backgroundColor: '#0781FC',
  },
  cardThree: {
    backgroundColor: '#727D47',
  },
  cardFour: {
    backgroundColor: '#7C42AF',
  },
  cardFive: {
    backgroundColor: '#FFE926',
  },
  cardSix: {
    backgroundColor: '#FFE926',
  },
});
