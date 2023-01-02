import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import HeaderHome from '../components/HeaderHome'
import Feed from '../components/Feed'


function HomeScreen() {
    return (
        <SafeAreaView style={styles.home}>
            {/* HEADER */}
            <HeaderHome />
            {/* FEED */}
            <Feed feed={true} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen
