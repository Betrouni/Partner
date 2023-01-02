import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../assets/colors/colors';

function ProfilePicPost(props) {
    return (
        <View style={styles.ProfilePic}>
            <Image
                style={styles.pic}
                source={{
                    uri: props.pic,
                }}
            />
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
        borderWidth: 2,
        borderRadius: 99,
        padding: 2,
        borderColor: colors.pink
    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 99
    }
})

export default ProfilePicPost
