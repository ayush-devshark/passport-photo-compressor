import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import BackgroundImageEditor from '../components/BackgroundImageEditor';
import ImageEditorHeader from '../components/ImageEditorHeader';
import SelectedImage from '../components/SelectedImage';
import {RootStackParamList} from '../navigation/AppNavigator';

type RouteProps = StackScreenProps<RootStackParamList, 'ImageEditor'>;
interface Props {
  route: RouteProps['route'];
}

const ImageEditor: FC<Props> = ({route}): JSX.Element => {
  const {imageUri} = route.params;

  return (
    <View style={styles.container}>
      <ImageEditorHeader />
      <BackgroundImageEditor />
      <View style={styles.imageContainer}>
        <SelectedImage uri={imageUri} />
      </View>
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
