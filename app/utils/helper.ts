import {Alert, PermissionsAndroid} from 'react-native';

export const requestCameraPermissions = async (): Promise<void> => {
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
