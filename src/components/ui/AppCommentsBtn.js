import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

export const AppCommentsBtn = (props) => {
  const {
    children,
    onPress,
  } = props;

  const Container = Platform.OS === 'ios'
    ? TouchableOpacity
    : TouchableNativeFeedback;

  return (
    <Container onPress={onPress} activeOpacity={0.7}>
      <View style={styles.button}>
        {children}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
