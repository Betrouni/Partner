import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MessagesScreen = () => {
    return (
        <View style={styles.messages}>
            <Text>This is the MessagesScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messages: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default MessagesScreen;