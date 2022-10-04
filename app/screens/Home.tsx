import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {}

const Home: FC<Props> = (): JSX.Element => {
  return (
    // Capture Button
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <Text style={styles.btnLabel}>Caputre</Text>
      </View>

      {/* Select Button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
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
  },
  btnLabel: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
