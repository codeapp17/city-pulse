import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

const AppText: React.FC<TextProps> = ({ style, children, ...rest }) => {
  return <Text style={[styles.text, style]} {...rest}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#111",
    textAlign:'left'
  },
});

export default AppText;
