import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  
  return (
    <View style={styles.container} >
      <View style={styles.contentContainer}>
        <Text>First</Text>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="image-plus" size={200} color="#b0b0b0" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Text>Then</Text>
        <TouchableOpacity style={styles.button} >
          <MaterialCommunityIcons name="image-plus" size={200} color="#b0b0b0"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  button: {
    display: 'flex',
    backgroundColor: '#e6e6e6',
    borderRadius: 15,
    padding: 10,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
