import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AboutScreen from "./AboutScreen";

export default function Index() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.content}>
        <AboutScreen />
      </View>
      <AppFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});