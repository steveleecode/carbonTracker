import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import video from 'D:/visualcode/carbonTracker/carbonTracker/assets/videos/waterfall.mp4';
import * as Font from 'expo-font';

const FontLoader = () => {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
      });
    }
  
    loadFonts();
  }, []);

  return null;
};

export default function HomeScreen({ navigation }) {
  return (
    <> 
      <View style={styles.container}>
        <Video
          source={video}
          shouldPlay
          isMuted={true}
          style={styles.backgroundVideo}
          repeat={true}
          isLooping
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={styles.rectangle}
            start={{x:0, y: 0.01}}
            end={{x:0, y: 1}}
          />
        </View>

        <View style={styles.header}>
          <Text style={styles.headerText} numberOfLines={2}>Transform the Future</Text>
        </View>

        <View style={styles.body} numberOfLines={12}>
          <Text style={styles.bodyText}>
            Every choice you make matters. {'\n'}{'\n'}
            Start your journey to a sustainable lifestyle by helping the environment. {'\n'}{'\n'}
            Together, we can change the world. 
          </Text>
        </View>
        
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Second")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundVideo: {
    ...StyleSheet.absoluteFill,
    overflow: 'visible',
    zIndex: 0,
  },

  rectangle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 1,
  },

  header: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    top: 400,
    padding: 0,
  },

  headerText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 56,
    marginRight: 10
  },

  body: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    top: 550,
    padding: 0,
  },

  bodyText: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    fontSize: 26,
    marginRight: 10,
    marginLeft: 20,
  },

  button: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'center',
  },
  
  buttonContainer: {
    height: 50,
    width: Dimensions.get('window').width - 50,
    position: 'absolute',
    top: 810,
    backgroundColor: '#0f0f0f',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});