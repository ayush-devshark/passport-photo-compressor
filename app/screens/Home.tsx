import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {}

const Home: FC<Props> = (): JSX.Element => {
  return (
    // Capture Button
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="camera" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.btnLabel}>Caputre</Text>
      </View>

      {/* Select Button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="folder-open" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.btnLabel}>Select</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  btnContainer: {
    width: 120,
    height: 120,
    marginVertical: 25,
  },
  button: {
    width: '100%',
    height: '100%',
    borderWidth: 4,
    borderColor: '#6C9ADE',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLabel: {
    textAlign: 'center',
    fontWeight: '500',
  },
  icon: {
    color: '#6C9ADE',
    fontSize: 55,
  },
});
