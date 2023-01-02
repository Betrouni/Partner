import * as React from 'react';
import { Text, RefreshControl, View, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import colors from '../assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';
import ProfilePicStory from './ProfilePicStory';
import Post from './Post';

function StoryContainer() {

    return (
        <View style={styles.storyContainer}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.storys}
            >
                <View style={styles.story}>
                    <ProfilePicStory user={true} name="Jessim" pic='https://media-exp1.licdn.com/dms/image/C4D03AQGKp9RWsjlFkw/profile-displayphoto-shrink_800_800/0/1617122696986?e=1624492800&v=beta&t=MI1ffeDt7j2406gjmcmu4ODx8sqX-X5X1pMjMvQFLl8' />
                </View>
                <View style={styles.story}>
                    <ProfilePicStory style={styles.story} story={true} name="Akyel" pic="https://s3-alpha-sig.figma.com/img/d4c1/7ff9/18583bf15a6bdc083bcee64acc58ed55?Expires=1618790400&Signature=V6tH~vM8ykrOF~OvBx9mUM4POy6HQmYQXvfCBxuXcF7lSVx5K2ozMDK6L0ZRjtQKEJgpthl~ilOcJmwProvI9ySWCSpr5~0PKFbmXSZx1fvBGC7o~QxM1gOD9bB6jKUQu3AGZg-doShph9tLp0kZ0v1JTW9Gl8KGBh3t~m3-vbGxQBt6qNDUjTgpdHEKVAPNlgnphIF5iZD~0FZNG~~gKObuG1qH77YydaXkRfoXh2Yj-utZTqUOt10llDkP-qH2ggWvXHDBfKJYwwmkzlXlCY6VosBm-X5RsXcgznieKpApE3AHgKzhLqlKQiz-G8FMt6nSoitX20kpWOubLCwBOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" live={true} />
                </View>
                <View style={styles.story}>
                    <ProfilePicStory style={styles.story} story={true} name="Nawal" pic="https://s3-alpha-sig.figma.com/img/9c54/bfee/48f1801e657b098f5792c61365f65c75?Expires=1618790400&Signature=E51aHLP46qbr28wgC0Dt59Ju8PgEO29KzKPBMNvx9aa~QRQt9NoETC7R9RVv6XaQ6gqnhV48ySK5wZDOYtfUFcG5SjGkce6Mz-x-4msqxNpJMF1BDsZDHup-G5CJBrKE3TT19itpB3wC5kRaqQfPsfp6t8j6DY6pH-mIPc3wWfFhdlw-BYei9yFWZWOoGDwwx0ErjzQrQcSvknQIpaXgkaXAp4haWx3hu3fhxfoCBsEMi1wX~WnO2pAHzspzVu2Ob2pq6uUnHnEX5T6JS6OukOi6aCNKVTPzs23lAiHPcBZ9vbs7ss48g9i4XujKLbYGeQePKgN-oUqDFw8Tcs9q~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                </View>
                <View style={styles.story}>
                    <ProfilePicStory style={styles.story} story={true} name="Ephra" pic="https://s3-alpha-sig.figma.com/img/a677/a41f/027410390877dbe19c213b2e6ee60b75?Expires=1618790400&Signature=YObhl845nOksvjSGSvtSOfiiDuFsZtFx5jCVwcZI1yj6D4Jj4X4-f2z2OdfRtYk8c1PbwhlG506r2pBli1P9KkCcLCO2AtB7S3klh4WHTqC42AMo~f6db~sC35NJ0JrsZviwh8Tq0wfdO06YImevXIaVS-Tq-XGwuvg1qd8ZPgZZ3BSAy9gtRVePdUo6220UM-7hbfdp0lWQimf65B95GwS7am19TQHGRxv34tY7YAIqdqygbs5d8aSWXE581WuJimr0zlMbk5rGOn0kGDzgpwwsM2pWFJadr0B3-3dpP3svjt~pFjVLMnv4jUwHzYIdKUvHQY0ErmwCMlesXcT0~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" live={true} />
                </View>
                <View style={styles.story}>
                    <ProfilePicStory style={styles.story} story={false} name="TATI" pic="https://s3-alpha-sig.figma.com/img/fe10/b423/a179f6612bd6b395294a31af333e0bb6?Expires=1618790400&Signature=SR2uD~82wlnvgO6kb0imCE7Fd9-sDq6biCY7TaOZA4UXfX9MV6M3gcqUgMJEbR8OdKKm5xjMQbm1PkX3imfRuxkgtIkxkgyxCgPq0~KuaRS~tS6vIpMLgCMPJxD9gUfJCcs4EEUrKgINNAQ8sRBf21~9G4FKPUamfXPIdHYtoTaHVwjNEA8fna5F3f0k7wN-QAjT04dH2dMrH2uX6vqguXKUqTEDxKJhQ9I-JMGjyNjxeuQ8aD5xmMKvUfucKXkpTdVDJAIpEy1YJ~zQExh3zP7OlI8RMamPDDJ8uphmbnS1frrFprrxxRXxRZNkWoZeLToCDNj0otXxkrFur4gmdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                </View>
                <View style={styles.story}>
                    <ProfilePicStory style={styles.story} story={false} name="TATA" pic="https://s3-alpha-sig.figma.com/img/1f61/ca60/cbc85c23d3705e0ea9b22359ff9489cc?Expires=1618790400&Signature=SP6w9bOIVI~fQeTSHzQpriH-CIftE2wJR15njSM9x6rxkMQsNtt6EnzKgcw1KCj5ZoCPVtk80gRkJVUeDlJHfcUxwK9hY0E9doJ6HeNesh5K02j1I68DWPzUawMohsjmBgPoYJK5yg4L7mfaU0q6-g4UCBbZGmFmbYIYGyMB5zgIyujtKHzaKqLJjosH0l6cLjo6ZSaecmUSQV03Zm8ru2ic04XVkcf-ZvkWIZ73dxU5kTxTppJBsU8LQCTte4axrXyGcLKdcBP2spE8PKZAqWoZyuMmghkXCDib1ei4zLZ3nAYTppsorhgfMbQb13SoF~om9Ixntk4MI6ABFpU2~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
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
    }
})

export default StoryContainer
