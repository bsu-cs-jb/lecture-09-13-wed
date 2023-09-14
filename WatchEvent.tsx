import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { LabelText, TitleText } from "./Shared";
import { RootStackParamList } from "./types";
import { StackScreenProps } from "@react-navigation/stack";
import styles from "./styles";

type Props = StackScreenProps<RootStackParamList, "Event">;

export function WatchEventView({ navigation, route }: Props) {
  const { event } = route?.params || {};
  return (
    <View style={styles.container}>
      <TitleText>Watch Event</TitleText>
      <ScrollView style={styles.scrollContainer}>
        {event?.watchRecords?.map((record) => (
          <TouchableOpacity
            key={record.id}
            onPress={() =>
              navigation?.navigate("Edit Watch Record", { record })
            }
          >
            <LabelText key={record.name}>Record: {record.name}</LabelText>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.flexFill} />
    </View>
  );
}
