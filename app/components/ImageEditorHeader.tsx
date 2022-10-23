import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigator';
import UtilityButtons from './UtilityButtons';

interface Props {
  onSavePress?: () => void;
}

const ImageEditorHeader: FC<Props> = ({onSavePress}): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <UtilityButtons.Back onPress={navigation.goBack} />

      {/* Save Button */}
      <UtilityButtons.Save onPress={onSavePress} />
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
