import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
    return (
        <View style={styles.calendar}>
            <Text>PAGE DE CALENDRIER</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    calendar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});