import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useCallback} from "react";
import {useRouter} from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

import {setToCart} from "@/store/cartSlice";
import {useAppDispatch} from "@/store";
import {getAll, Item} from "@/api/item";

import MainContainer from "@/components/MainContainer";
import ItemCard from "@/components/ui/ItemCard";

const limit = 10
const offset = 10
export default function ItemListTab(props: any) {
    const [pagination, setPagination] = useState<{ offset: number, limit: number }>({offset: 0, limit});
    const [items, setItems] = useState<Item[]>([]);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        async function fetch() {
            const items = await getAll(pagination.offset, pagination.limit);
            setItems(items.data)
        }

        fetch()
    }, []);

    const addToCart = useCallback((item: Item) => {
        dispatch(setToCart(item))
    }, [])


    async function loadMore() {
        const items = await getAll(pagination.offset + offset, pagination.limit);
        setItems((prevState) => {
            return [...prevState, ...items.data]
        })
        setPagination({offset: pagination.offset + offset, limit: pagination.limit})
    }

    return (
        <MainContainer>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.push('/(app)/(tabs)/(items)/cart')} style={styles.сartButton}>
                    <Entypo name="shopping-cart" size={28} color="white"/>
                </TouchableOpacity>
            </View>
                <FlatList
                    // style={{width: '100%', height: 2000}}
                    // style={{flex: 1, backgroundColor: '#c14949'}}
                    // contentContainerStyle={{flexGrow: 1}}
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReached={loadMore}
                    renderItem={({item}) => {
                        return (
                            <View style={{marginBottom: 10, width: '100%'}}>
                                <ItemCard onPress={addToCart}  {...item} />
                            </View>
                        )
                    }}
                />
        </MainContainer>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-end',
        width: '100%',
        paddingVertical: 10
    },
    сartButton: {
        padding: 5
    }
});
