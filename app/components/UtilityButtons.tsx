import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {
  onPress?: () => void;
}

type buttonProps = FC<Props>;

const Back: buttonProps = ({onPress}): JSX.Element => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Icon name="arrow-left" style={styles.icon} />
    </Pressable>
  );
};

const Save: buttonProps = ({onPress}): JSX.Element => {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Icon name="file-download" style={styles.icon} />
      </Pressable>
      <Text>Save</Text>
    </View>
  );
};

const UtilityButtons: {Back: buttonProps; Save: buttonProps} = {
  Back,
  Save,
};

export default UtilityButtons;

const buttonDim = 45;
const styles = StyleSheet.create({
  button: {
    height: buttonDim,
    width: buttonDim,
    backgroundColor: '#fff',
    borderRadius: buttonDim / 2,
    elevation: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    color: '#6C9ADE',
  },
  btnTitle: {
    color: '#6C9ADE',
    alignSelf: 'center',
  },
});
