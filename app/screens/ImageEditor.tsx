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
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [fileSize, setFileSize] = useState<number>(0);
  const [compressValue, setCompressValue] = useState<number>(1);
  const [compressedPercentage, setCompressedPercentage] = useState<number>(100);

  const backActionRef = useRef<any>();
  const {imageUri} = route.params;

  const displayConfirmModal = (): void => setShowConfirmModal(true);
  const hideConfirmModal = (): void => setShowConfirmModal(false);

  const selectImageToCompress = async (): Promise<void> => {
    const {path, error} = await selectAndCropImageFromDevice();
    if (error) {
      return console.log(error);
    }
    setSelectedImage(path);
  };

  const captureImageToCompress = async (): Promise<void> => {
    const {path, error} = await selectAndCropImageFromCamera();
    if (error) {
      return console.log(error);
    }
    setSelectedImage(path);
  };

  // Handling back press manually
  const handleMoveToBackScreen = (): void => {
    navigation.removeListener('beforeRemove', () => {});
    hideConfirmModal();
    navigation.dispatch(backActionRef.current);
  };

  const getImageSize = useCallback(async (): Promise<void> => {
    try {
      const uri = imageUri.split('file:///')[1];
      const size = await fsModule.getSize(uri);
      const calculatedSize = covertSizeInKb(size);
      setFileSize(calculatedSize);
    } catch (err) {
      console.log(err);
    }
  }, [imageUri]);

  // compressing image

  const handleImageCompress = async (value: number): Promise<void> => {
    const calcCompressValue: number = Math.floor(value * 100);
    const uri = imageUri.split('file:///')[1];
    const res = await fsModule.compressImage(uri, calcCompressValue);
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
    getImageSize();
  }, [navigation, getImageSize]);

  return (
    <View style={styles.container}>
      <ImageEditorHeader />
      <BackgroundImageEditor />

      <View style={styles.imageContainer}>
        <SelectedImage uri={selectedImage || imageUri} />
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
