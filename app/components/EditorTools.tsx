import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SelectorButton from './SelectorButton';

interface Props {}

const EditorTools: FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <SelectorButton label="Select Another">
          <Icon name="folder-open" />
        </SelectorButton>

        <SelectorButton label="Capture Anotherr">
          <Icon name="camera" />
        </SelectorButton>
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
});
