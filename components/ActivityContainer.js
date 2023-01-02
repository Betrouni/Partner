import * as React from 'react';
import { Text, RefreshControl, View, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import colors from '../assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';
import ActivityIcon from './ActivityIcon';
import Post from './Post';

function ActivityContainer() {

    return (
        <View style={styles.activityContainer}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.activitys}
            >
                <View style={styles.activity}>
                    <ActivityIcon activityName="🏀" distanceFromUser="0.5" />
                </View>
                <View style={styles.activity}>
                    <ActivityIcon activityName="⚽️" distanceFromUser="0.7" />
                </View>
                <View style={styles.activity}>
                    <ActivityIcon activityName="🛼" distanceFromUser="1.2" />
                </View>
                <View style={styles.activity}>
                    <ActivityIcon activityName="🏃" distanceFromUser="1.2" />
                </View>
                <View style={styles.activity}>
                    <ActivityIcon activityName="🥊" distanceFromUser="1.3" />
                </View>
                <View style={styles.activity}>
                    <ActivityIcon activityName="🛹" distanceFromUser="2" />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    feeds: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    activityContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 0.2,
        borderColor: colors.gray
    },
    activitys: {
        paddingHorizontal: 10
    },
    activity: {
        marginRight: 15,
    },
    posts: {
        marginBottom: 150,
        marginTop: -23
    }
})

export default ActivityContainer
