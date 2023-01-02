import React, { useState, useRef } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import colors from '../assets/colors/colors';
import { SearchBar } from 'react-native-elements';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import StoryContainer from '../components/StoryContainer';
import ActivityContainer from '../components/ActivityContainer';
import StorieExplorer from '../components/StorieExplorer';



function ExplorerScreen() {
    const [search, setSearch] = useState()

    const handleSearch = () => {
        setSearch(search)
        setSearch(null)
    }

    return (
        <SafeAreaView style={styles.explorer}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.explorer_header}>
                    <Text style={styles.title}>Salut <Text style={styles.username}>jessh-94</Text> 👋,</Text>
                    <Text style={styles.title}>Voici quelques suggestions</Text>
                    <Text style={styles.title}>pour vous 🔥</Text>
                </View>
                <View style={styles.search}>
                    <SearchBar
                        value={search}
                        onChangeText={search => setSearch(search)}
                        platform="ios"
                        placeholder='Rechercher sur Partner' />
                </View>
                <View style={styles.section}>
                    <View style={styles.title_button}>
                        <Text style={styles.title}>Partner Pro</Text>
                        <TouchableOpacity style={styles.title_seeMore}>
                            <Text style={styles.title_txtSee}>voir plus</Text>
                            <Ionicons name="ios-arrow-forward" size={20} color={colors.green} />
                        </TouchableOpacity>
                    </View>
                    <StoryContainer style={styles.storyContainer} />
                </View>
                {/* <View style={styles.section}>
                    <Text style={styles.title}>Autour de vous 📍</Text>
                    <ActivityContainer />
                </View> */}
                <View style={styles.section}>
                    <Text style={styles.title}>Stories et Lives pour vous</Text>
                    <View style={styles.storieContainer}>
                        <View style={styles.storieLine}>
                            <StorieExplorer
                                pic="https://images.unsplash.com/photo-1554865587-cc3c9088b02f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                                username="Jessim"
                                timestamp="Paris, France - il y a 10h"
                                live={true}
                            />
                            <StorieExplorer
                                pic="https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/165005065_265743835127877_3490525249137015203_n.jpg?tp=1&_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Pxs7bn76-WAAX9ifCZU&edm=AP_V10EAAAAA&ccb=7-4&oh=4b86f4c38accb4bc5ca1dab98ff0812e&oe=6095B546&_nc_sid=4f375e"
                                username="Akyel"
                                timestamp="Paris, France - il y a 10h"
                            />
                            <StorieExplorer
                                pic="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                username="Nawal"
                                timestamp="Paris, France - il y a 10h"
                            />
                            <StorieExplorer
                                pic="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                username="Louis"
                                timestamp="Paris, France - il y a 10h"
                                live={true}
                            />
                            <StorieExplorer
                                pic="https://images.unsplash.com/photo-1500468756762-a401b6f17b46?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHNwb3J0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                username="TATI"
                                timestamp="Paris, France - il y a 10h"
                            />
                            <StorieExplorer
                                pic="https://images.unsplash.com/photo-1598971862093-42c04c83871a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                                username="Ephra"
                                timestamp="Paris, France - il y a 10h"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    explorer: {
        backgroundColor: 'white',
    },
    explorer_header: {
        marginTop: 10
    },
    title: {
        fontSize: 24,
        paddingLeft: 25,
        paddingRight: 10,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 5,
        alignItems: 'center',
    },
    title_sect: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginBottom: 3
    },
    username: {
        color: colors.green
    },
    search: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: -10
    },
    section: {
        marginTop: 15
    },
    storieContainer: {
        marginBottom: 0
    },
    storieLine: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        flexWrap: 'wrap',
        marginTop: 8
    },
    title_button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350
    },
    title_seeMore: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 80,
        justifyContent: 'space-between',
    },
    title_txtSee: {
        color: colors.green
    }
})

export default ExplorerScreen
