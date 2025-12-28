import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default function Index() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.content}>
        <Text style={styles.text}>
          Contenu principal de l’application
        </Text>
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