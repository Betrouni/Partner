import React, { useState, useRef } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Animated, View, Text } from "react-native";
import colors from '../assets/colors/colors';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

function LikeButton({ item, style }) {
    const scale = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const reverseOpacity = useRef(new Animated.Value(0)).current;
    const [liked, setLiked] = useState(false);

    const like = (value) => {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 0.9,
                duration: 20,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 1.2,
                duration: 110,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 0.9,
                duration: 20,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.timing(scale, {
                    toValue: 1,
                    duration: 170,
                    useNativeDriver: true,
                }),
                Animated.timing(value ? opacity : reverseOpacity, {
                    toValue: 0,
                    duration: 70,
                    useNativeDriver: true,
                }),
                Animated.timing(value ? reverseOpacity : opacity, {
                    toValue: 1,
                    duration: 70,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
        setLiked(value);
    };

    return (
        <View>
            <AnimatedIcon
                name={"ios-heart"}
                size={25}
                style={{
                    ...style,
                    position: "absolute",
                    opacity: reverseOpacity,
                    transform: [{ scale }],
                }}
                color={colors.red}
                onPress={() => like(!liked)}
            />
            <AnimatedIcon
                name={"ios-heart-outline"}
                size={25}
                style={{
                    ...style,
                    opacity: opacity,
                    transform: [{ scale }],
                }}
                color="black"
                onPress={() => like(!liked)}
            />
        </View>
    );
};

export default LikeButton;
