import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';

function LiveBadge() {
    return (
        <View style={styles.lives}>
            <Text style={styles.lives_text}>Live</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    lives: {
        position: 'absolute',
        bottom: 20,
        right: 15,
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: colors.green,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: colors.white
    },
    lives_text: {
        fontWeight: '800',
        color: colors.white,
        fontSize: 13
    }

})

export default LiveBadge
