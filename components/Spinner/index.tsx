import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { SpinnerProps } from './types';
import { spinnerStyles } from './styles';
import { useTheme } from '../ThemeProvider';

const Spinner = ({ primaryColor, secondaryColor, size}: SpinnerProps) => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const { theme } = useTheme()
  const styles = spinnerStyles(primaryColor, secondaryColor, size, theme);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateValue]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.spinner, { transform: [{ rotate }] }]} />
    </View>
  );
};

export default Spinner;