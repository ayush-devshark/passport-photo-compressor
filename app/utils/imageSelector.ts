import {Alert, PermissionsAndroid} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

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

export const selectAndCropImageFromCamera = async (
  width: number = 413,
  height: number = 531,
): Promise<{path: string; error: unknown | null}> => {
  try {
    await requestCameraPermissions();

    // open the camera
    const {path} = await ImageCropPicker.openCamera({
      width,
      height,
      cropping: true,
    });
    return {path, error: null};
  } catch (err) {
    return {path: '', error: err};
  }
};

export const selectAndCropImageFromDevice = async (
  width: number = 413,
  height: number = 531,
): Promise<{path: string; error: unknown | null}> => {
  try {
    await requestCameraPermissions();

    // open the gallery
    const {path} = await ImageCropPicker.openPicker({
      width,
      height,
      cropping: true,
    });
    return {path, error: null};
  } catch (err) {
    return {path: '', error: err};
  }
};
