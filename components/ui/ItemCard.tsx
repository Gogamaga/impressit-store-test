import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Item} from "@/api/item";
import {Button} from "@/components/core/Button";


interface Props extends Item {
    onPress?: (item: Item) => void
}

 function ItemCard(props: Props) {
    const {onPress, ...rest} = props;
    const {description, title, price, id} = rest
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View style={styles.content}>
                <Text
                    ellipsizeMode='tail'
                    numberOfLines={2}
                    style={styles.text}
                >
                    {description}
                </Text>
                <Text style={styles.subtitle}>
                    {price} $
                </Text>
            </View>
            {onPress &&
                <Button onPress={() => onPress(rest)} title={'Add to Cart'}/>
            }
        </View>
    )
}

export default React.memo(ItemCard)

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginBottom: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'green',
    },
    subtitle: {
        fontSize: 24,
        color: '#333',
        marginTop: 10,
    },
    content: {
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        color: '#444444',
        textAlign: 'center',
    },
});