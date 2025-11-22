import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./Button";

type Option = { label: string; value: string };

type Props = {
  label?: string;
  value?: string;
  options: Option[];
  onChange: (value: string) => void;
};

const SearchableDropdown: React.FC<Props> = ({ label, value, options, onChange }) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity style={styles.dropdown} onPress={() => setVisible(true)}>
        <Text style = {styles.placeholder}>{value || "Select"}</Text>
      </TouchableOpacity>

      <Modal visible={visible} animationType="slide">
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />

          <FlatList
            data={filtered}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  onChange(item.value);
                  setVisible(false);
                  setSearch("");
                }}
              >
                <Text style={styles.placeholder}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginVertical: 8 },
  label: { marginBottom: 6, fontSize: 14, color: "#333", textAlign:'left' },
  placeholder:{
    textAlign:'left',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  modalContainer: { flex: 1, padding: 20, backgroundColor: "rgba(255,255,255,0.2)", justifyContent:'flex-end' },
  modalContent: { height: 600, backgroundColor: "#fff", borderRadius:8, padding:8 },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignContent:'flex-start',
    textAlign:'left'
  },
  option: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default SearchableDropdown;
