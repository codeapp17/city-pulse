import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, I18nManager } from "react-native";

import Input from "../components/Input";
import SearchableDropdown from "../components/SearchableDropdown";
import Button from "../components/Button";
import AppText from "../components/AppText";
import useFetch from "../hooks/useFetch";
import { useNavigation } from "@react-navigation/native";
import EventCard from "../components/EventCard";
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");

  const [events, setEvents] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  const navigation = useNavigation();

  const { t } = useTranslation();

  // Fetch Events
  const { data: eventsData, loading: loadingEvents, refetch } = useFetch(`${process.env.EXPO_PUBLIC_EVENTS_API}.json`, {
    params: { keyword, city }
  });

  // Fetch Cities
  const { data: venuesData } = useFetch(process.env.EXPO_PUBLIC_VENUE_API, {
    params: { size: 100 }
  });

  // Events
  useEffect(() => {
    if (eventsData?._embedded?.events) {
      setEvents(eventsData._embedded.events);
    }
  }, [eventsData]);

  // Unique Cities
  useEffect(() => {
    if (venuesData?._embedded?.venues) {
      const venueList = venuesData._embedded.venues;

      const uniqueCityList = Array.from(
        new Map(
          venueList.map((v: any) => [v.city?.name, { label: v.city?.name, value: v.city?.name }])
        ).values()
      );

      setCities(uniqueCityList);
    }
  }, [venuesData]);

  const handleSearch = () => refetch();

  const openEvent = (id: string) => {
    navigation.navigate("EventDetail" as never, { id } as never);
  };
  
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{t("home_title")}</AppText>
      <Input
        label="Keyword"
        value={keyword}
        onChange={setKeyword}
        placeholder="Music, Sports, Tech..."
      />
      <SearchableDropdown
        label="Select City"
        value={city}
        options={cities}
        onChange={setCity}
      />
      <Button title="Search" onPress={handleSearch} />
      <AppText style={styles.subtitle}>Upcoming Events</AppText>
      {loadingEvents ? (
        <AppText>Loading events...</AppText>
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 50 }}
          renderItem={({ item }) => (
            <EventCard
              event={item}
              onPress={() => openEvent(item.id)}
            />
          )}
        />
      )}

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    textAlign:'left'
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "600",
    textAlign:'left'
  },
  card: {
    backgroundColor: "#f9fafb",
    padding: 12,
    borderRadius: 10,
    marginBottom: 14,
  },
  eventImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 18,
    fontWeight: "600",
  },
  eventVenue: {
    color: "#6b7280",
    marginTop: 4,
  }
});
