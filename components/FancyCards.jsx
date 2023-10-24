import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <View style={styles.fancy}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://blog.castle.io/content/images/2021/03/blog-thumb-1.png',
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 4,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          elevation:3
        }}>
        <View>
          <Text style={styles.firstText}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look
          </Text>
        </View>
        <View>
          <Text style={styles.secondText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney
          </Text>
        </View>
      </View>
      <View style={styles.fancy}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://blog.castle.io/content/images/2021/03/blog-thumb-1.png',
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 4,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          elevation:3
        }}>
        <View>
          <Text style={styles.firstText}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look
          </Text>
        </View>
        <View>
          <Text style={styles.secondText}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fancy: {marginBottom: 30},
  image: {
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    
  },
  fancy: {marginBottom: 2, marginLeft: 3},
  firstText: {
    marginLeft: 9,
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  secondText: {
    marginLeft: 9,
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
});
