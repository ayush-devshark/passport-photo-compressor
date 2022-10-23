import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

interface Props {
  visible: boolean;
  onFinish?: () => void;
}

const DoneLottie: FC<Props> = ({visible, onFinish}): JSX.Element | null => {
  if (!visible) {
    return null;
  }
  return (
    <Lottie
      source={require('../source/done.json')}
      autoPlay
      loop={false}
      style={styles.container}
      onAnimationFinish={onFinish}
    />
  );
};

export default DoneLottie;

const styles = StyleSheet.create({
  container: {width: 50, height: 50},
});
