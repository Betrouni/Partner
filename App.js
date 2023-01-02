import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNav from './navigation/BottomNav'
import colors from './assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer
      styles={styles.app}
    >
      <BottomNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})