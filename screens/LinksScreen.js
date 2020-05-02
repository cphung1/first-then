import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';

import { StyleSheet, Text, View, TextInput, Animated } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function LinksScreen() {
  const [value, onChangeText] = React.useState(0);

  return (
    <View>
      <CountdownCircleTimer
        isPlaying={false}
        duration={50}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text style={{ color: animatedColor }}>
            {remainingTime} Seconds
          </Animated.Text>
        )}
      </CountdownCircleTimer>


      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}


const styles = StyleSheet.create({
});
