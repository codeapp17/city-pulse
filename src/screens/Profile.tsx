import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Button from "../components/Button";
import Card from "../components/Card";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAsyncStorage } from "../context/useAsyncStorage";

export default function ProfileScreen() {
  const { user } = useAsyncStorage();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Profile</AppText>

      <Card style={styles.card}>
        <AppText style={styles.label}>Display Name</AppText>
        <AppText style={styles.value}>
          {user?.displayName || "No name set"}
        </AppText>

        <AppText style={styles.label}>Email</AppText>
        <AppText style={styles.value}>{user?.email}</AppText>
      </Card>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },
  card: {
    padding: 16,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
  },
});
