import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Application React Native</Text>
      <Text style={styles.subtitle}>Premier composant réutilisable</Text>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 4,
  },
});