import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import UtilityButtons from './UtilityButtons';

interface Props {}

const ImageEditorHeader: FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <UtilityButtons.Back />

      {/* Save Button */}
      <UtilityButtons.Save />
    </View>
  );
};

export default ImageEditorHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
