import React from "react";
import { Button, View } from "react-native";
import { LabelText } from "./Shared";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import styles from "./styles";

type Props = StackScreenProps<RootStackParamList, "Edit Watch Record">;

export function WatchRecordModal({
  navigation,
  route: {
    params: { record },
  },
}: Props) {
  return (
    <View style={styles.container}>
      <LabelText>Name: {record.name}</LabelText>
      <LabelText>Seen: {record.seen ? "yes" : "no"}</LabelText>
      <LabelText>
        Timestamp: {record.timestamp ? record.timestamp : ""}
      </LabelText>
      <Button title="Close" onPress={() => navigation?.goBack()} />
    </View>
  );
}
