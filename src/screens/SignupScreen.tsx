import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import AppText from "../components/AppText";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
      displayName: name, 
    });
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Sign Up</AppText>

      <Input label="Display Name" value={name} onChange={setName} />
      <Input label="Email" keyboardType="email-address"
        autoCapitalize="none" value={email} onChange={setEmail} />
      <Input label="Password" secureTextEntry={true} value={password} onChange={setPassword} />

      <Button title={loading ? "Loading..." : "Sign Up"} onPress={signup} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AppText style={styles.link}>Back to Login</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "600", marginBottom: 20 },
  link: { marginTop: 18, color: "#2563eb", fontSize: 16 },
});
