import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import AppText from "../components/AppText";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Login</AppText>

      <Input label="Email" value={email} onChange={setEmail} keyboardType="email-address"
        autoCapitalize="none" />
      <Input label="Password" value={password} onChange={setPassword} secureTextEntry={true} />

      <Button title={loading ? "Loading..." : "Login"} onPress={login} />

      <TouchableOpacity onPress={() => navigation.navigate("Signup" as never)}>
        <AppText style={styles.link}>Don't have an account? Sign Up</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "600", marginBottom: 20 },
  link: { marginTop: 18, color: "#2563eb", fontSize: 16 },
});
