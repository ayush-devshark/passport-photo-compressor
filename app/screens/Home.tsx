import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LargeIconButton from '../components/LargeIconButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {requestCameraPermissions} from '../utils/helper';
import ImageCropPicker from 'react-native-image-crop-picker';

interface Props {}

const Home: FC<Props> = (): JSX.Element => {
  const handleImageCapture = async (): Promise<void> => {
    try {
      await requestCameraPermissions();

      // open the camera
      const {path} = await ImageCropPicker.openCamera({
        width: 413,
        height: 531,
        cropping: true,
      });
      console.log(path);
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      {/* App Titles */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose your image</Text>
        <Text style={styles.secondaryText}>
          Please choose your image using one of these options, which you want to
          convert to passport size
        </Text>
      </View>

      {/* // Capture Button */}
      <LargeIconButton title="Capture" onPress={handleImageCapture}>
        <Icon name="camera" />
      </LargeIconButton>

      {/* Select Button */}
      <LargeIconButton title="Select">
        <Icon name="folder-open" />
      </LargeIconButton>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  titleContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    color: '#272727',
    fontWeight: '500',
    textAlign: 'center',
  },
  secondaryText: {
    color: '#272727',
    textAlign: 'center',
    opacity: 0.5,
    lineHeight: 20,
    paddingTop: 5,
  },
});
