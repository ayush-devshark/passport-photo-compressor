import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {}

const Home: FC<Props> = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* App Titles */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Choose your image</Text>
        <Text style={styles.secondaryText}>
          Please choose your image using one of these options, which you want to
          convert to passport size
        </Text>
      </View>

      {/* // Capture Button */}
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
  titleContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    color: '#272727',
    fontWeight: '500',
    textAlign: 'center',
  },
  secondaryText: {
    color: '#272727',
    textAlign: 'center',
    opacity: 0.5,
    lineHeight: 20,
    paddingTop: 5,
  },
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
