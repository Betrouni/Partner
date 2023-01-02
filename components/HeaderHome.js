import * as React from 'react';
import { Text, Image, IconButton, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';

function HeaderHome() {
    return (
        <View View style={styles.header}>
            <Image
                source={require('../assets/images/Logo.png')}
            />
            <View style={styles.left}>
                <TouchableOpacity>
                    <Ionicons name="ios-add-outline" size={40} color={colors.green} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ios-chatbubbles" size={27} color={colors.green} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: 435,
        height: 100,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingBottom: 15,
        marginTop: 25,
    },
    left: {
        width: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default HeaderHome
