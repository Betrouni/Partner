import * as React from 'react';
import { Text, RefreshControl, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';
import ProfilePicStory from './ProfilePicStory';
import Post from './Post';
import StoryContainer from './StoryContainer';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function Feed(props) {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.feed}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                vertical={true}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <StoryContainer />
                {props.feed
                    ?
                    <View style={styles.posts}>
                        <Post
                            username="username"
                            timestamp="timestamp"
                            pic="https://images.unsplash.com/photo-1594623274890-6b45ce7cf44a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            text="Dans le sport, l'homme reprend ses droits. Il reconquiert la discipline, la seule liberté qui soit douce." hashtag="#sport #mindset"
                            likes="132"
                            comments="132"
                        />
                        <Post
                            text="Dans le sport, l'homme reprend ses droits. Il reconquiert la discipline, la seule liberté qui soit douce." hashtag="#sport #mindset"
                        />
                        <Post
                            text="Dans le sport, l'homme reprend ses droits. Il reconquiert la discipline, la seule liberté qui soit douce." hashtag="#sport #mindset"
                        />
                        <Post
                            pic="https://images.unsplash.com/photo-1603792582751-c73976204e1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            text="Dans le sport, l'homme reprend ses droits. Il reconquiert la discipline, la seule liberté qui soit douce." hashtag="#sport #mindset"
                        />
                    </View>
                    : <View style={styles.title_button}>
                        <Text style={styles.title}>Vous n'avez pas encore de Partners...</Text>
                        <TouchableOpacity style={styles.title_seeMore}>
                            <Text style={styles.title_txtSee}>Explorer</Text>
                        </TouchableOpacity>
                    </View>}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    feeds: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    storyContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 0.2,
        borderColor: colors.gray
    },
    storys: {
        paddingHorizontal: 10
    },
    story: {
        marginRight: 15,
    },
    posts: {
        marginBottom: 150,
        marginTop: -23
    },
    title_button: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title_seeMore: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 99,
        backgroundColor: colors.green
    },
    title_txtSee: {
        color: colors.white,
        fontWeight: '700',
        fontSize: 17,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'left',
        marginBottom: 5,
        alignItems: 'center',
    },
})

export default Feed
