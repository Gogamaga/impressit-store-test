import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeUserSession(token: string) {
    return AsyncStorage.setItem("session-token", token);
}

export async function retrieveUserSession() {
    return AsyncStorage.getItem("session-token");
}

export async function removeUserSession() {
    return await AsyncStorage.removeItem("session-token");
}