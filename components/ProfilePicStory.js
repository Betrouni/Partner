import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../assets/colors/colors';
import LiveBadge from './LiveBadge'


function ProfilePicStory(props) {
    return (
        <View style={styles.ProfilePic}>
            <View
                style={props.story ? styles.sto : styles.noSto}
            >
                <Image
                    style={styles.pic}
                    source={{
                        uri: props.pic,
                    }}
                />
            </View>
            {props.user && !props.story
                ? <View style={styles.addStoContainer}>
                    <Ionicons name="ios-add-outline" size={40} color={colors.white} />
                </View>
                : <View></View>
            }
            <Text style={styles.username}>
                {props.user ? "Ma story" : props.name}
            </Text>
            {props.live
                ? <View style={styles.live}>
                    <LiveBadge />
                </View>
                : <View></View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    ProfilePic: {
        height: 110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sto: {
        borderWidth: 3,
        borderRadius: 99,
        padding: 2,
        borderColor: colors.green,
    },
    noSto: {
        borderWidth: 3,
        borderRadius: 99,
        padding: 2,
        borderColor: colors.noSto,
    },
    pic: {
        width: 65,
        height: 65,
        borderRadius: 99
    },
    username: {
        marginTop: 7,
        fontSize: 15
    },
    addStoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 45,
        left: 18,
        borderRadius: 200
    },
    live: {
        position: 'absolute',
        bottom: 5,
        right: 2
    }
})

export default ProfilePicStory
