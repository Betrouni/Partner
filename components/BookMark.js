import React, { useState, useRef } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Animated, View } from "react-native";
import colors from '../assets/colors/colors';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

function BookMark({ item, style }) {
    const scale = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const reverseOpacity = useRef(new Animated.Value(0)).current;
    const [saved, setSaved] = useState(false);

    const save = (value) => {
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
        setSaved(value);
    };

    return (
        <View>
            <AnimatedIcon
                name={"ios-bookmark"}
                size={25}
                style={{
                    ...style,
                    position: "absolute",
                    opacity: reverseOpacity,
                    transform: [{ scale }],
                }}
                color={colors.green}
                onPress={() => save(!saved)}
            />
            <AnimatedIcon
                name={"ios-bookmark-outline"}
                size={25}
                style={{
                    ...style,
                    opacity: opacity,
                    transform: [{ scale }],
                }}
                color="black"
                onPress={() => save(!saved)}
            />
        </View>
    );
};

export default BookMark;
