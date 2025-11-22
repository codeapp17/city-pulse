import React, { useState } from "react";
import { Image, ActivityIndicator, StyleSheet, View } from "react-native";

type Props = {
  uri: string;
  style?: any;
};

const AsyncImage: React.FC<Props> = ({ uri, style }) => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={[styles.container, style]}>
      {loading && <ActivityIndicator size="small" color="#2563eb" style={styles.loader} />}
      <Image
        source={{ uri }}
        style={[styles.image]}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  loader: { position: "absolute" },
  image: { width: "100%", height: "100%", borderRadius: 10 },
});

export default AsyncImage;
