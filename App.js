import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, View, } from "react-native";
import SignIn from "./src/screens/sigin";
import SignUp from "./src/screens/signup";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignIn/> */}
      <SignUp/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});