import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { LabelText, TitleText } from "./Shared";
import { RootStackParamList, WatchEvent } from "./types";
import { StackScreenProps } from "@react-navigation/stack";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import styles from "./styles";

type EventsViewProps = StackScreenProps<RootStackParamList, "Events">;

const fakeEvent: WatchEvent = {
  id: nanoid(),
  name: "Sat @ Redtail",
  date: "2023-05-01",
  watchRecords: [
    {
      id: nanoid(),
      name: "Redtail Hawk",
      seen: true,
      timestamp: "2023-05-01 12:34",
    },
    {
      id: nanoid(),
      name: "Bald Eagle",
      seen: false,
    },
  ],
};

export function EventsView({ navigation, route }: EventsViewProps) {
  const { events } = route?.params || { events: [] };

  const handlePress = (name: string) => {
    navigation?.navigate("Event", {
      event: {
        ...fakeEvent,
        name: name,
      },
    });
  };

  const eventComponents = [];
  for (const name of events) {
    eventComponents.push(
      <TouchableOpacity key={name} onPress={() => handlePress(name)}>
        <LabelText>Event: {name}</LabelText>
      </TouchableOpacity>,
    );
  }

  return (
    <View style={styles.container}>
      <TitleText>Bird Watching Events</TitleText>
      <ScrollView style={styles.scrollContainer}>{eventComponents}</ScrollView>
      <View style={[styles.flexFill]} />
    </View>
  );
}
