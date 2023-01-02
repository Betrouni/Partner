import * as React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';

function ProfilePicNav(props) {
    return (
        <View style={styles.profilePicNav}>
            {props.focus ?
                <View>
                    <Image
                        style={styles.tinyLogoCurrent}
                        source={{
                            uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGKp9RWsjlFkw/profile-displayphoto-shrink_800_800/0/1617122696986?e=1624492800&v=beta&t=MI1ffeDt7j2406gjmcmu4ODx8sqX-X5X1pMjMvQFLl8',
                        }}
                    />
                </View>
                : <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGKp9RWsjlFkw/profile-displayphoto-shrink_800_800/0/1617122696986?e=1624492800&v=beta&t=MI1ffeDt7j2406gjmcmu4ODx8sqX-X5X1pMjMvQFLl8',
                        }}
                    />
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    profilePicNav: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tinyLogo: {
        width: 28,
        height: 28,
        borderRadius: 50
    },
    tinyLogoCurrent: {
        width: 28,
        height: 28,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.green
    }
})

export default ProfilePicNav
