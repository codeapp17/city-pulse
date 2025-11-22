import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  type?: "primary" | "secondary";
};

const Button: React.FC<Props> = ({ title, onPress, type = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, type === "secondary" && styles.secondaryBtn]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 6,
  },
  secondaryBtn: {
    backgroundColor: "#6b7280",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default Button;
