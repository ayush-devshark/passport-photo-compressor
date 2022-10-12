import React, {
  FC,
  Children,
  ReactNode,
  isValidElement,
  cloneElement,
} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label: string;
  children?: ReactNode;
  onPress?: () => void;
}

const SelectorButton: FC<Props> = ({label, children, onPress}): JSX.Element => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {Children.map(children, child => {
        if (!isValidElement(child)) {
          return null;
        }
        return cloneElement(child, {
          ...child.props,
          style: {...styles.btnIcon, ...child.props.style},
        });
      })}
      <Text style={styles.btnLabel}>{label}</Text>
    </Pressable>
  );
};

export default SelectorButton;

const styles = StyleSheet.create({
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
