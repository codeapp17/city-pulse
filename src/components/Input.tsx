import React from "react";
import { TextInput, View, Text, StyleSheet, I18nManager } from "react-native";

type Props = {
  label?: string;
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  keyboardType?: import("react-native").KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

const Input: React.FC<Props> = ({ label, value, onChange, placeholder, keyboardType = "default",
secureTextEntry = false,
autoCapitalize = "none", }) => {
  const isRTL = I18nManager.isRTL;
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, isRTL && {textAlign:"right"}]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#999"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginVertical: 8 },
  label: { marginBottom: 6, fontSize: 14, color: "#333", textAlign:"left" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    textAlign:'left',
    backgroundColor: "#fff",
  },
});

export default Input;
