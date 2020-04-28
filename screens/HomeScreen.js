import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen() {
  const [firstImage, setFirstImage] = React.useState(null);
  const [secondImage, setSecondImage] = React.useState(null);

  let firstImagePicker = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setFirstImage({ localUri: pickerResult.uri });
  }
  

  let secondImagePicker = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSecondImage({ localUri: pickerResult.uri });
  }
  

  return (
    <View style={styles.container} >
      <View style={styles.contentContainer}>
        <Text style={styles.text}>First</Text>
        { firstImage ? 
          <TouchableOpacity onPress={secondImagePicker} style={styles.button} >
            <Image style={styles.image} source={{ uri: firstImage.localUri }} />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={firstImagePicker} style={styles.button}>
            <MaterialCommunityIcons style={styles.icon} name="image-plus" size={150} color="#b0b0b0" />
          </TouchableOpacity>
        }
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.text}>Then</Text>
        { secondImage ? 
          <TouchableOpacity onPress={secondImagePicker} style={styles.button} >
            <Image style={styles.image} source={{ uri: secondImage.localUri }} />
          </TouchableOpacity>
          :
        <TouchableOpacity onPress={secondImagePicker} style={styles.button} >
          <MaterialCommunityIcons style={styles.icon} name="image-plus" size={150} color="#b0b0b0"/>
        </TouchableOpacity>
        }
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  button: {
    backgroundColor: '#e6e6e6',
    borderRadius: 15,
    padding: 10,
    width: '75%',
    height: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: 'auto',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text: {
    fontSize: 30,
  }
});
