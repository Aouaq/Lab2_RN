import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        All rights reserved, 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});