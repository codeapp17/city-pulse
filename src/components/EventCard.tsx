import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
import AsyncImage from "./AsyncImage";

type Props = {
  event: any;
  onPress: () => void;
};

const EventCard: React.FC<Props> = ({ event, onPress }) => {
  const imageUrl =
    event?.images?.[0]?.url ??
    "https://picsum.photos/300/200"; // fallback image

  const venue = event?._embedded?.venues?.[0];

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <AsyncImage uri={imageUrl} style={styles.image} />

      <View style={styles.content}>
        <AppText style={styles.title}>{event?.name}</AppText>

        {venue?.name && (
          <AppText style={styles.venue}>
            {venue?.name}
            {venue?.city?.name ? `, ${venue?.city?.name}` : ""}
          </AppText>
        )}

        {event?.dates?.start?.dateTime && (
          <AppText style={styles.date}>
            {new Date(event.dates.start.dateTime).toLocaleDateString()}
          </AppText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    overflow: "hidden",
    padding:4
  },
  image: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 4,
    textAlign:'left'
  },
  venue: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
    textAlign:'left'
  },
  date: {
    fontSize: 13,
    color: "#1d4ed8",
    fontWeight: "500",
    textAlign:'left'
  },
});

export default EventCard;
