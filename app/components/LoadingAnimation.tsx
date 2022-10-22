import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

interface Props {
  visible: boolean;
}

const LoadingAnimation: FC<Props> = ({visible}): JSX.Element | null => {
  if (!visible) {
    return null;
  }
  return (
    <Lottie
      source={require('../source/loading.json')}
      autoPlay
      loop
      speed={2}
      style={styles.container}
    />
  );
};

export default LoadingAnimation;

const styles = StyleSheet.create({
  container: {width: 50, height: 50},
});
