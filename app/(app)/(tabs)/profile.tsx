import {Image, StyleSheet, ScrollView, View, Text} from 'react-native';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "expo-router";

import {useAppDispatch, RootState} from "@/store";
import {retrieveUserSession, removeUserSession} from "@/storage";
import {fetchUser} from "@/store/userSlice";
import MainContainer from "@/components/MainContainer";
import {Button} from "@/components/core/Button";

export default function ProfileScreen() {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        async function fetch() {
            const token = await retrieveUserSession();
            console.log(token);
            if (token) {
                dispatch(fetchUser(token))
            }
        }

        fetch()
    }, [])

    async function logout() {
        try {
            await removeUserSession()
            router.replace('/sign-in')
        } catch (err) {
        }
    }

    return (
        <MainContainer>
            <ScrollView style={{height: '100%', width: '100%'}}>
                <View style={styles.userCardContainer}>
                    <View style={styles.avatarContainer}>
                        <Image style={{height: '100%', width: '100%'}} src={user!.image}/>
                    </View>
                    <Text style={styles.text}>
                        {user!.username}
                    </Text>
                    <Text style={styles.text}>
                        {user!.email}
                    </Text>
                </View>
                <Button title="Log Out" onPress={logout}></Button>
            </ScrollView>
        </MainContainer>
    );
}

const styles = StyleSheet.create({
    userCardContainer: {
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
        marginBottom: 16,
    },
    avatarContainer: {
        height: 100,
        width: 100,
        gap: 8,
        marginBottom: 8,
    },
    text: {
        fontSize: 18,
    },
});
