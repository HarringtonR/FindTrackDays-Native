import React, {Component} from 'react';
import {ImageBackground, Text, View, Dimensions, Image} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.ImageBackground} source={require('./src/assets/photo-1532126438530-dbae987d263c.jpeg')}>
          <View style={styles.title}>
            <Text style={styles.welcome}>Welcome to Find Track Days!</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = ({
  container: {
    flex: 1
  },
  ImageBackground: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  title:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  welcome: {

    fontSize: 20,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
