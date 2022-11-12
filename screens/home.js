import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={{
            uri: 'https://img.etimg.com/thumb/msid-78505324,width-300,imgsize-389321,,resizemode-4,quality-100/tv-indi.jpg',
          }}
          style={styles.backgroundImage}>
          <View style={styles.text}>
            <Text style={styles.titleText}>CHANNEL LIST</Text>
            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('IssLocation')}>
              <Text style={styles.routeText}>English</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('Meteors')}>
              <Text style={styles.routeText}>Hindi</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('Meteors')}>
              <Text style={styles.routeText}>International</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('Meteors')}>
              <Text style={styles.routeText}>Local Channel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('Meteors')}>
              <Text style={styles.routeText}>Movies</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('Meteors')}>
              <Text style={styles.routeText}>Music</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('Meteors')}>
              <Text style={styles.routeText}>Sports</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={() => this.props.navigation.navigate('Meteors')}>
              <Text style={styles.routeText}>Religious</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 19,
    borderRadius: 30,
    height: 35,
    width:195,
    backgroundColor:'rgb(135,206,235)',
  },

  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(81,4,0)',
  },
  routeText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
});
