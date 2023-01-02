import * as React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from '../views/HomeScreen'
import ExplorerScreen from '../views/ExplorerScreen'
import Calendar from '../views/Calendar'
import NotificationScreen from '../views/NotificationScreen'
import UserProfileScreen from '../views/UserProfileScreen'
import ProfilePicNav from '../components/ProfilePicNav'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                styles: styles.tabBar,
                activeTintColor: colors.green,
                inactiveTintColor: colors.gray,
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={({ route }) => ({
                    tabBarLabel: ({ focused }) => {
                        let iconColor
                        let ionName
                        if (route.name === 'Home') {
                            iconColor = focused
                                ? colors.green
                                : colors.black
                            ionName = focused
                                ? 'ios-home'
                                : 'ios-home-outline'
                        }
                        return <Ionicons name={ionName} size={28} color={iconColor} />;
                    },
                    tabBarAccessibilityLabel: 'Home',
                })}
            />
            <Tab.Screen
                name="Explorer"
                component={ExplorerScreen}
                options={({ route }) => ({
                    tabBarLabel: ({ focused }) => {
                        let iconColor
                        let ionName
                        if (route.name === 'Explorer') {
                            iconColor = focused
                                ? colors.green
                                : colors.black
                            ionName = focused
                                ? 'ios-search'
                                : 'ios-search'
                        }
                        return <Ionicons name={ionName} size={28} color={iconColor} />;
                    },
                    tabBarAccessibilityLabel: 'Explorer',
                })}
            />
            <Tab.Screen
                name="Map"
                component={Calendar}
                options={({ route }) => ({
                    tabBarLabel: ({ focused }) => {
                        let iconColor
                        let ionName
                        if (route.name === 'Map') {
                            iconColor = focused
                                ? colors.green
                                : colors.black
                            ionName = focused
                                ? 'calendar-outline'
                                : 'calendar-outline'
                        }
                        return <Ionicons name={ionName} size={28} color={iconColor} />;
                    },
                    tabBarAccessibilityLabel: 'Map',
                })}
            />
            <Tab.Screen
                name="Profile"
                component={UserProfileScreen}
                options={({ route }) => ({
                    tabBarLabel: ({ focused }) => {
                        let focus
                        if (route.name === 'Profile') {
                            focus = focused
                                ? true
                                : false
                        }
                        return <ProfilePicNav focus={focus} />;
                    },
                    tabBarAccessibilityLabel: 'Profile',
                })}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
})