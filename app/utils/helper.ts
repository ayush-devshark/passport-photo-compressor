import {PermissionsAndroid} from 'react-native';

export const covertSizeInKb = (size: number): number => {
  return parseFloat((size / 1000).toFixed(2));
};

// checking for the permission
export const checkCameraPermission = async (): Promise<boolean> => {
  return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
};
