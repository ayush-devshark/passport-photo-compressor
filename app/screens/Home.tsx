import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LargeIconButton from '../components/LargeIconButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  selectAndCropImageFromCamera,
  selectAndCropImageFromDevice,
} from '../utils/imageSelector';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';

interface Props {
  navigation: NavigationProp<RootStackParamList>;
}

const Home: FC<Props> = ({navigation}): JSX.Element => {
  const navigateToImageEditor = (uri: string): void => {
    navigation.navigate('ImageEditor', {imageUri: uri});
  };

  const handleImageCapture = async (): Promise<void> => {
    const {path, error} = await selectAndCropImageFromCamera();
    if (error) {
      return console.log(error);
    }
    navigateToImageEditor(path);
  };

  const handleImageSelection = async (): Promise<void> => {
    const {path, error} = await selectAndCropImageFromDevice();
    if (error) {
      return console.log(error);
    }
    navigateToImageEditor(path);
  };

  //  Example native module access
  /* const handleOnPress = async (): Promise<void> => {
      try {
        const message = await fsModules?.justGreetMe('JOHN');
        console.log(message);
      } catch (err) {
        console.log(err);
      }
    };
  */

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
      <LargeIconButton title="Select" onPress={handleImageSelection}>
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
