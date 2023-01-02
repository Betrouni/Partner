import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';
import LiveBadge from './LiveBadge'

function StorieExplorer(props) {
    return (
        <View>
            <Image
                style={styles.storie}
                source={{
                    uri: props.pic,
                }}
            />
            <Text style={styles.username}>{props.username}</Text>
            <Text style={styles.timestamp}>{props.timestamp}</Text>
            {props.live
                ?
                <View style={styles.lives}>
                    <Text style={styles.lives_text}>Live</Text>
                </View>
                : <View></View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    storie: {
        height: 250,
        width: 175,
        borderRadius: 14,
        marginBottom: 9
    },
    username: {
        position: 'absolute',
        top: 5,
        left: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    timestamp: {
        position: 'absolute',
        top: 30,
        left: 10,
        fontSize: 10,
        fontWeight: '500',
        color: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    lives: {
        position: 'absolute',
        bottom: 20,
        right: 15,
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: colors.pink,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: colors.white
    },
    lives_text: {
        fontWeight: '800',
        color: colors.white,
        fontSize: 10
    }

})

export default StorieExplorer
