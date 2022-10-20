import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import BackgroundImageEditor from '../components/BackgroundImageEditor';
import ConfirmModal from '../components/ConfirmModal';
import EditorTools from '../components/EditorTools';
import ImageEditorHeader from '../components/ImageEditorHeader';
import SelectedImage from '../components/SelectedImage';
import fsModule from '../modules/fsModule';
import {RootStackParamList} from '../navigation/AppNavigator';
import {covertSizeInKb} from '../utils/helper';
import {
  selectAndCropImageFromCamera,
  selectAndCropImageFromDevice,
} from '../utils/imageSelector';

type RouteProps = StackScreenProps<RootStackParamList, 'ImageEditor'>;
interface Props {
  route: RouteProps['route'];
}

const ImageEditor: FC<Props> = ({route}): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [selectedImage, setSelectedImage] = useState<string>('');
  const [compressedImage, setCompressedImage] = useState<string>('');
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [fileSize, setFileSize] = useState<number>(0);
  const [compressValue, setCompressValue] = useState<number>(1);
  const [compressedPercentage, setCompressedPercentage] = useState<number>(100);

  const backActionRef = useRef<any>();
  const {imageUri} = route.params;

  const resetActivity = (): void => {
    setCompressValue(1);
    setCompressedPercentage(100);
    setCompressedImage('');
  };

  const displayConfirmModal = (): void => setShowConfirmModal(true);
  const hideConfirmModal = (): void => setShowConfirmModal(false);

  const selectImageToCompress = async (): Promise<void> => {
    const {path, error} = await selectAndCropImageFromDevice();
    if (error) {
      return console.log(error);
    }
    resetActivity();
    getImageSize(path);
    setSelectedImage(path);
  };

  const captureImageToCompress = async (): Promise<void> => {
    const {path, error} = await selectAndCropImageFromCamera();
    if (error) {
      return console.log(error);
    }
    resetActivity();
    getImageSize(path);
    setSelectedImage(path);
  };

  // Handling back press manually
  const handleMoveToBackScreen = (): void => {
    navigation.removeListener('beforeRemove', () => {});
    hideConfirmModal();
    navigation.dispatch(backActionRef.current);
  };

  const getImageSize = useCallback(async (imgUri: string): Promise<void> => {
    try {
      const uri = imgUri.split('file:///')[1];
      const size = await fsModule.getSize(uri);
      const calculatedSize = covertSizeInKb(size);
      setFileSize(calculatedSize);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // compressing image
  const handleImageCompress = async (value: number): Promise<void> => {
    // converting to 10 to 100 value
    const calcCompressValue: number = Math.floor(value * 100);

    // getting size and location of compressed file from java fsModule
    const uri = selectedImage.split('file:///')[1];
    const res = await fsModule.compressImage(uri, calcCompressValue);

    // setting image file location for rendering
    setCompressedImage('file:///' + res.uri);

    // setting file size in kb
    const calculatedSize = covertSizeInKb(res.size);
    setFileSize(calculatedSize);

    setCompressedPercentage(Math.round(value * 100));
  };

  const updateCompressValue = (value: number): void => {
    setCompressValue(value);
  };

  // Handling the back press
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      displayConfirmModal();
      backActionRef.current = e.data.action;
    });
  }, [navigation]);

  useEffect(() => {
    if (imageUri && !selectedImage) {
      setSelectedImage(imageUri);
      getImageSize(imageUri);
    }
  }, [imageUri, getImageSize, selectedImage]);

  return (
    <View style={styles.container}>
      <ImageEditorHeader />
      <BackgroundImageEditor />

      <View style={styles.imageContainer}>
        <SelectedImage uri={compressedImage || selectedImage} />
      </View>

      <EditorTools
        fileSize={fileSize}
        compressValue={compressValue}
        compressedPercentage={compressedPercentage}
        onSelectAnother={selectImageToCompress}
        onCaptureAnother={captureImageToCompress}
        onSliderChange={handleImageCompress}
        onSlidingComplete={updateCompressValue}
      />

      <ConfirmModal
        title="Are you sure ?"
        visible={showConfirmModal}
        message="Are you sure because this action will discard all your changes ?"
        onCancelPress={hideConfirmModal}
        onDiscardPress={handleMoveToBackScreen}
      />
    </View>
  );
};

export default ImageEditor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
