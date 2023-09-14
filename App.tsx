import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { EventsView } from "./EventsView";
import { WatchEventView } from "./WatchEventView";
import { RootStackParamList } from "./types";
import { WatchRecordModal } from "./WatchRecordModal";

const Stack = createStackNavigator<RootStackParamList>();

const fakeEvents = [
  "Sat @ Redtail",
  "Tue @ Prairie Creek",
  "Fri @ White River",
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Events">
        <Stack.Group>
          <Stack.Screen
            name="Events"
            component={EventsView}
            initialParams={{ events: fakeEvents }}
          />
          <Stack.Screen
            name="Event"
            component={WatchEventView}
            options={({ route }) => ({ title: route.params.event.name })}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Edit Watch Record"
            component={WatchRecordModal}
            options={{
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
