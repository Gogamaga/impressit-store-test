import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useSelector} from "react-redux";

import MainContainer from "@/components/MainContainer";
import {Button} from "@/components/core/Button";
import {RootState, useAppDispatch} from "@/store";
import ItemCard from "@/components/ui/ItemCard";
import React from "react";
import {clearCart} from "@/store/cartSlice";

export default function CartScreen() {
    const dispatch = useAppDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    function checkout() {
        dispatch(clearCart());
    }

    return (
        <MainContainer>
            {items.length === 0 ?
                <Text style={{color: 'white'}}>CART IS EMPTY</Text> :
                <FlatList
                    style={{width: '100%'}}
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={{marginBottom: 10, width: '100%'}}>
                            <ItemCard {...item} />
                        </View>
                    )}
                    ListFooterComponent={() => {
                        return (
                            <View>
                                <Button onPress={checkout} title={'Checkout'}/>
                            </View>
                        )
                    }}
                />
            }
        </MainContainer>
    );
}

const styles = StyleSheet.create({});
