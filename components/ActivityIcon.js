import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../assets/colors/colors';

function ActivityIcon(props) {
    return (
        <View style={styles.aroudU}>
            <View style={styles.activityContainer}>
                <Text style={styles.activity}>{props.activityName}</Text>
            </View>
            <Text style={styles.distance}>
                {props.distanceFromUser} km
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aroudU: {
        height: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activityContainer: {
        padding: 12,
        borderRadius: 35,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    distance: {
        marginTop: 7,
        fontSize: 15
    },
    addStoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 29,
        left: 45,
    },
    activity: {
        fontSize: 30
    }
})

export default ActivityIcon
