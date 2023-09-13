import { Button, StyleSheet, Text, View } from "react-native";
import LectureApp from "./LectureApp";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
/**
 * DO NOT MODIFY THIS FILE
 */

function TimerSets() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Timer sets</Text>
      <View style={styles.flexFill} />
    </View>
  );
}

function Timers({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Timers Page</Text>
      <Button
        title="Edit Timer Sets"
        onPress={() => {
          navigation.navigate("Timer Sets");
        }}
      />
      <View style={styles.flexFill} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Timers">
        <Stack.Screen name="Timer Sets" component={TimerSets} />
        <Stack.Screen name="Timers" component={LectureApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 20,
  },
});

export const styles = StyleSheet.create({
  flexFill: {
    flex: 1,
  },
  input: {
    fontSize: 18,
    flex: 1,
    borderWidth: 1,
    padding: 3,
  },
  scrollContainer: {
    flex: 1,
    alignSelf: "flex-start",
    width: "100%",
  },
  titleText: {
    fontSize: 30,
  },
  subTitleText: {
    fontSize: 20,
  },
  labelText: {
    fontSize: 18,
  },
  horzContainer: {
    flexDirection: "row",
    gap: 10,
  },
  topLevelContainer: {
    // Add styles here to affect the outer App component
    // or leave empty if you do not need to change it.
  },
  avoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
});
