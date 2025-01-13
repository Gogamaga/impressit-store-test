import React from "react";
import {Text, ButtonProps, TouchableOpacity, StyleSheet} from "react-native";

interface Props extends ButtonProps {
    onPress: () => void;
    title: string;
}

export function Button(props: Props) {
    const {onPress, title} = props
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={onPress}
        >
            <Text style={styles.buttonTextStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        alignItems: 'center',
        borderRadius: 30,
        padding: 15,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: 16,
    },
})