import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';

function UserProfileScreen() {
    return (
        <View style={styles.profile}>
            {/* header */}
            {/* user INfos */}
            {/* user bio and coms */}
            {/* tab Navigation */}
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default UserProfileScreen
