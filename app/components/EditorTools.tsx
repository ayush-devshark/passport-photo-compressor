import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Slider from '@react-native-community/slider';
import SelectorButton from './SelectorButton';

interface Props {
  fileSize?: number;
  onSelectAnother?: () => void;
  onCaptureAnother?: () => void;
  onSliderChange?: (value: number) => void;
}

const EditorTools: FC<Props> = ({
  fileSize,
  onSelectAnother,
  onCaptureAnother,
  onSliderChange,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <SelectorButton label="Select Another" onPress={onSelectAnother}>
          <Icon name="folder-open" />
        </SelectorButton>

        <SelectorButton label="Capture Anotherr" onPress={onCaptureAnother}>
          <Icon name="camera" />
        </SelectorButton>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Compressed to: 50%</Text>
        <Text style={styles.label}>Image size: {fileSize} kb</Text>
      </View>

      <View style={styles.sliderContainer}>
        <Slider
          maximumTrackTintColor="rgba(108, 154, 222, 0.8)"
          minimumTrackTintColor="rgb(108, 154, 222)"
          thumbTintColor="rgb(108, 154, 222)"
          onValueChange={onSliderChange}
        />
      </View>
    </View>
  );
};

export default EditorTools;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#fff',
    elevation: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  label: {
    color: '#272727',
    fontSize: 18,
  },
  sliderContainer: {
    paddingVertical: 10,
  },
});
