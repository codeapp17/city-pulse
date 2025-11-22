import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import AppText from "../components/AppText";
import AsyncImage from "../components/AsyncImage";
import Button from "../components/Button";
import useFetch from "../hooks/useFetch";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';
import { useFavourite } from "../hooks/useFavouriteEvents";
import { Ionicons } from "@expo/vector-icons";


const EventDetails = () => {
  const route = useRoute();
  const { id } = route.params as { id: string };

  const { isFav, toggleFavourite } = useFavourite(id);

  // Fetch event details
  const { data: event, loading, error } = useFetch(`${process.env.EXPO_PUBLIC_EVENTS_API}/${id}`);
  if (loading) return <AppText style={styles.center}>Loading event...</AppText>;
  if (error) return <AppText style={styles.center}>Error loading event</AppText>;
  if (!event) return <AppText>No event found</AppText>;

  // Venue info
  const venue = event._embedded?.venues?.[0];
  const city = venue?.city?.name;
  const address = venue?.address?.line1;
  const location = venue?.location;

  // Open event externally
  const eventUrl = event?.url?.startsWith("http")
    ? event.url
    : `https://${event.url}`;

  // Google Maps embed
  const mapUrl = location
    ? `https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=14&output=embed`
    : null;

  return (
    <ScrollView style={styles.container}>
      {/* Banner Image */}
      <View style={styles.bannerWrapper}>
        <AsyncImage
          uri={event.images?.[0]?.url}
          style={styles.banner}
        />
        <TouchableOpacity style={styles.favButton} onPress={toggleFavourite}>
          <Ionicons
            name={isFav ? "heart" : "heart-outline"}
            size={30}
            color={isFav ? "red" : "#fff"}
          />
          </TouchableOpacity>
      </View>

      {/* Floating Card */}
      <View style={styles.card}>
        <AppText style={styles.title}>{event.name}</AppText>
        <AppText style={styles.date}>
          {new Date(event.dates?.start?.dateTime).toLocaleString(undefined, {
            dateStyle: "long",
            timeStyle: "short",
          })}
        </AppText>

        {/* Venue */}
        {venue && (
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Venue</AppText>
            <AppText>{venue?.name}</AppText>
            <AppText>{city}</AppText>
            <AppText>{address}</AppText>
          </View>
        )}

        {/* Info */}
        {event.info && (
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Event Info</AppText>
            <AppText>{event.info}</AppText>
          </View>
        )}

        {/* Note */}
        {event.pleaseNote && (
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Please Note</AppText>
            <AppText>{event.pleaseNote}</AppText>
          </View>
        )}

        {/* Ticket Button */}
        <Button
          title="View on Ticketmaster"
          onPress={() => {
            // open in browser
            Linking.openURL(eventUrl);
          }}
        />

        {/* Map */}
        {mapUrl && (
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Location</AppText>
            <View style={styles.mapWrapper}>
            <MapView
              style={styles.mapWrapper}
              initialRegion={{
              latitude: parseFloat(location.latitude),
              longitude: parseFloat(location.longitude),
              latitudeDelta: 0.01,
              longitudeDelta: 0.01}}>
                  <Marker
                    coordinate={{
                    latitude: parseFloat(location.latitude),
                    longitude: parseFloat(location.longitude)}}/>
            </MapView>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    imageWrapper: {
      position: "relative",
      marginBottom: 20,
    },
    favBanner: {
      width: "100%",
      height: 240,
      borderRadius: 14,
    },
    favButton: {
      position: "absolute",
      top: 15,
      right: 15,
      padding: 6,
      backgroundColor: "rgba(0,0,0,0.4)",
      borderRadius: 40,
    },
    center: {
      textAlign: "center",
      marginTop: 40,
    },
    back: {
      fontSize: 16,
      color: "#2563eb",
      marginVertical: 18,
    },
    bannerWrapper: {
      width: "100%",
      height: 250,
      borderRadius: 14,
      marginBottom: -40,
      zIndex: 1,
    },
    banner: {
      width: "100%",
      height: "100%",
      borderRadius: 14,
    },
    card: {
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 14,
      marginTop: 20,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 4,
    },
    title: {
      fontSize: 26,
      fontWeight: "700",
      textAlign:'left'
    },
    date: {
      fontSize: 16,
      color: "#555",
      marginTop: 6,
      marginBottom: 14,
      textAlign:'left'
    },
    section: {
      marginVertical: 12,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 4,
      textAlign:'left'
    },
    mapWrapper: {
      height: 220,
      borderRadius: 12,
      overflow: "hidden",
      backgroundColor: "#eee",
    },
    map: {
      flex: 1,
    },
  });
