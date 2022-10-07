import React, {FC} from 'react';
import {StyleSheet, Text, View, PermissionsAndroid, Alert} from 'react-native';
import LargeIconButton from '../components/LargeIconButton';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {}

const Home: FC<Props> = (): JSX.Element => {
  const handleImageCapture = async (): Promise<void> => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera so you can take pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      const {NEVER_ASK_AGAIN, DENIED} = PermissionsAndroid.RESULTS;

      if (granted === NEVER_ASK_AGAIN) {
        return Alert.alert(
          'Fail to open camera',
          'Its looks like camera permissions are not granted. Please allow access for proper use of app!',
        );
      }
      if (granted === DENIED) {
        return Alert.alert(
          'Fail to open camera',
          'Sorry to use this feature, camera permissions are required.',
        );
      }
    } catch (err) {
      console.log('Fail to open camera error!', err);
    }
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
