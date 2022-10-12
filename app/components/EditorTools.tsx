import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {}

const EditorTools: FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Pressable style={styles.button}>
          <Icon style={styles.btnIcon} name="folder-open" />
          <Text style={styles.btnLabel}>Select Another</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Icon style={styles.btnIcon} name="camera" />
          <Text style={styles.btnLabel}>Capture Another</Text>
        </Pressable>
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6C9ADE',
    padding: 10,
    borderRadius: 5,
  },
  btnIcon: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5,
  },
  btnLabel: {
    color: '#fff',
  },
});
