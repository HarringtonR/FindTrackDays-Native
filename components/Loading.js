import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Image, Text } from 'react-native';


export default class Loading extends React.Component {
  render() {
    setTimeout(() =>{
      this.props.navigation.navigate('Home')
    }, 5000);
    return (
      <View style={styles.container}>
        <ImageBackground style = { styles.ImageBackground }source = {require('../assets/racetrack.jpg')}>
          <View style={styles.Logo}>
            <Text style={styles.text}>www.findtrackdays.com</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  Logo: {
    position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     justifyContent: 'center',
     alignItems: 'center'
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: '100'
  }
});
