import React, {FC} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';

interface Props {}

const ConfirmModal: FC<Props> = (): JSX.Element => {
  return (
    <Modal transparent>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Are you sure ?</Text>
          <Text style={styles.message}>
            Are you sure because this action will discard all your changes ?
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '85%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  modalTitle: {
    fontWeight: '500',
    fontSize: 18,
    color: '#6C9ADE',
  },
  message: {
    color: '#272727',
    opacity: 0.8,
    lineHeight: 20,
  },
});
