import React, { useState, useRef } from "react";
import { Text, Pressable, Image, View, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors';
import ProfilePicPost from './ProfilePicPost'
import { Ionicons } from '@expo/vector-icons';
import LikeButton from './LikeButton'
import BookMark from './BookMark'
import Carousel from "pinar";
/* BOTTOM SHEET POUR ENVOYER EN MP OU POUR SIGNALER ECT*/
// import BottomSheet from 'react-native-simple-bottom-sheet';

function Post(props) {
    const panelRef = useRef(null);
    return (
        <View style={styles.post}>
            <View style={styles.post_header}>
                {/* Profil pic */}
                <View style={styles.post_headerLeft}>
                    <ProfilePicPost pic='https://pbs.twimg.com/profile_images/1376806237019504640/mRasJ9KH_400x400.jpg' />
                    <View style={styles.post_info}>
                        {/* username et timestamp */}
                        <Text style={styles.username}>Jessim</Text>
                        <Text style={styles.timestamp}>Paris, France - il y a 10h </Text>
                        {/* button */}
                    </View>
                </View>
                <Pressable>
                    <Ionicons name="ios-ellipsis-horizontal" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.post_content}>
                {/* images carousel if images */}
                <View style={styles.post_image}>
                    {props.pic
                        ? <Carousel
                            showsControls={false}
                            height={'100%'}
                        >
                            <View style={styles.slide1}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: props.pic }}
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: props.pic }}
                                />
                            </View>
                            <View style={styles.slide3}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: props.pic }}
                                />
                            </View>
                        </Carousel>

                        : <View></View>
                    }

                </View>
                {/* text if text */}
                {props.text
                    ? <Text style={styles.post_text}>
                        {props.text}
                    </Text>
                    : <View></View>
                }

                {/* Hashtag */}
                {props.hashtag
                    ? <Text style={styles.post_hashtag}>
                        {props.hashtag}
                    </Text>
                    : <View></View>
                }
            </View>
            <View style={styles.post_buttons}>
                <View style={styles.post_buttonsRight}>
                    {/* bookmark */}
                    <BookMark />
                    {/* Message */}
                    <Pressable style={styles.post_btnInfo}>
                        <Ionicons name="ios-share-outline" size={25} color="black" />
                    </Pressable>
                </View>
                <View style={styles.post_buttonsLeft}>
                    {/* Comm avec nombres de comm */}
                    <Pressable style={styles.post_btnInfo}>
                        <Ionicons name="ios-chatbubble-outline" size={24} color="black" />
                        <Text style={styles.post_btntext}>132</Text>
                    </Pressable>
                    {/* Likes avec nombres de likes */}
                    <View style={styles.post_btnInfo}>
                        <LikeButton />
                        <Pressable>
                            <Text style={styles.post_btntext}>132</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        paddingHorizontal: 15,
    },
    post_header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: -20
    },
    post_headerLeft: {
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    username: {
        fontWeight: '600',
        fontSize: 15
    },
    timestamp: {
        color: colors.gray,
        fontWeight: '400',
        fontSize: 13,
        marginTop: 6
    },
    post_content: {

    },
    post_hashtag: {
        color: colors.pink,
        marginTop: 3
    },
    post_buttons: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    post_buttonsLeft: {
        width: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    post_buttonsRight: {
        width: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    post_btnInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    post_btntext: {
        marginLeft: 2,
        fontWeight: '500'
    },
    post_image: {
        flex: 1,
    },
    image: {
        borderRadius: 14,
        height: 350,
        marginBottom: 15,
        margin: 3
    },
})

export default Post
