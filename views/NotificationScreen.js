import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';


function NotificationScreen() {
    return (
        <View style={styles.notifications}>
            <Text style={styles.title}>Notification</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    notifications: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default NotificationScreen
