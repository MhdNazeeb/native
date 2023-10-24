import { Image, StyleSheet, Text, TouchableOpacity, View ,Linking} from 'react-native'
import React from 'react'

export default function MongoDbCard() {
    function openurl(url:string) {
        Linking.openURL(url)
    }
    return (
        <View style={styles.fancy}>
          <View >
            <Image
              style={styles.image}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP2F9MEccsSNABfd-9s0qYI4vGt-u8z4bxLggnC6EOGl6RDSQJr6ogqCZe0KipndZU0Ec&usqp=CAU',
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              elevation: 4,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              
            }}>
            <View style={{height:350}}>
              <Text style={styles.firstText}>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look
              </Text>
            
            <View>
              <Text style={styles.secondText}>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor
                at Hampden-Sydney
              </Text>
              <View style={styles.openLink}>
            <TouchableOpacity style={styles.links}  onPress={()=>openurl('https://www.mongodb.com/docs/manual/core/document/')}>
              <Text style={{color: 'white',fontSize:14}}>LEARN MORE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.links} onPress={()=>openurl('https://www.linkedin.com/in/muhammed-nazeeb-823736205/')}>
              <Text style={{color: 'white',fontSize:14}} >FOLOW</Text>
            </TouchableOpacity>
          </View>
            </View>
            </View>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      image: {
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        
      },
      fancy: {paddingTop: 20},
      firstText: {
        marginLeft: 9,
        marginTop: 12,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
      },
      secondText: {
        marginLeft: 9,
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
      },
      openLink: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 40,
      },
      links: {
        backgroundColor: 'black',
        width: 150,
        height: 40,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2
      },
    });