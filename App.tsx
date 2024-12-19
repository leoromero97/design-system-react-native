import { StyleSheet, Text, View } from "react-native";
import Spinner from "./components/Spinner";

function App() {
  return (
    <View style={styles.container}>
      <Text>Esta es una prueba con las tecnologías react native y storybook</Text>
      <Spinner primaryColor="#070808" secondaryColor="#ccc" size="extraSmall" />
    </View>
  );
}

let AppEntryPoint = App;

if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
