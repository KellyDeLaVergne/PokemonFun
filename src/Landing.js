import React from 'react';
import { Dimensions, ImageBackground, Image, Text, View } from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/icons/landing.jpg');
var {height, width} = Dimensions.get('window');

class Landing extends React.Component {
  render() {
    return(
      <View>
        <ImageBackground source={myBackground} style={{width: '100%', height: '100%'}}>          
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokemonFun!</Text>
            <Button
              block
              style={styles.buttonStyle}
              onPress={()=>this.props.switchScreen('search')}
            >
              <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 30,
    color: '#000',
    alignItems: 'center',
    fontWeight: 'bold' 
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
}

export default Landing;