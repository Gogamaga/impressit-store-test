import React from "react";
import {View, StyleSheet, Platform} from "react-native";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

export default function MainContainer(props: any) {
    const {children} = props;
    const bottomTabBarHeight = useBottomTabBarHeight();
    return (
        <View style={[styles.container, {paddingBottom: Platform.OS === 'ios'? bottomTabBarHeight: 0}]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#12d675'
    }
})