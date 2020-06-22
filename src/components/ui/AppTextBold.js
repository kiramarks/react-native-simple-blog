import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from "prop-types";

export const AppTextBold = (props) => {
  return (
    <Text style={{...styles.default, ...props.style}} onPress={props.onPress}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'helvetica-bold',
  }
});

AppTextBold.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.any,
  onPress: PropTypes.func
}