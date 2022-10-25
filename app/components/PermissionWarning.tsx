import React, {FC} from 'react';
import {Linking} from 'react-native';
import ConfirmModal from './ConfirmModal';

interface Props {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const PermissionWarning: FC<Props> = ({
  visible,
  title,
  message,
  onClose,
}): JSX.Element => {
  const handleOpenSettings = (): void => {
    onClose();
    Linking.openSettings();
  };

  return (
    <ConfirmModal
      visible={visible}
      primaryBtnTitle="Open Settings"
      dangerBtnTitle="Close"
      title={title}
      message={message}
      onDangerBtnPress={onClose}
      onPrimaryBtnPress={handleOpenSettings}
    />
  );
};

export default PermissionWarning;
