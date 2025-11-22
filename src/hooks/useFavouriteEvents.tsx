import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorite_events";

export function useFavourite(eventId: string) {
  const [isFav, setIsFav] = useState(false);

  // Load saved favorites
  useEffect(() => {
    const loadFavorites = async () => {
      const json = await AsyncStorage.getItem(FAVORITES_KEY);
      const favs = json ? JSON.parse(json) : [];

      setIsFav(favs.includes(eventId));
    };
    loadFavorites();
  }, [eventId]);

  // Toggle favorite
  const toggleFavourite = async () => {
    const json = await AsyncStorage.getItem(FAVORITES_KEY);
    const favs = json ? JSON.parse(json) : [];

    let updated;

    if (favs.includes(eventId)) {
      updated = favs.filter((id: string) => id !== eventId);
      setIsFav(false);
    } else {
      updated = [...favs, eventId];
      setIsFav(true);
    }

    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  return { isFav, toggleFavourite };
}
