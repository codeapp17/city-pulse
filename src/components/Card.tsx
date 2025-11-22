import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

const Card: React.FC<Props> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 0,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
    overflow: "hidden",
  },
});

export default Card;
