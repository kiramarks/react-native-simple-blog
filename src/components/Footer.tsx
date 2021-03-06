import React, { useCallback } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { AppText } from "./ui/AppText";
import { THEME } from "../theme";

export const Footer = () => {

  const handleClick = useCallback(
    () => Linking.openURL('https://github.com/kiramarks'),
    []
  );

  return (
    <View style={styles.footer}>
      <AppText style={{ color: THEME.FOOTER_LINK_COLOR }}>Developed by</AppText>
      <AppText style={styles.footerLink}
               onPress={handleClick}
      >
        Kira Marks
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 85,
    backgroundColor: THEME.MAIN_COLOR,
  },
  footerLink: {
    marginLeft: 4,
    color: THEME.FOOTER_LINK_COLOR,
    textDecorationLine: 'underline',
  },
});
