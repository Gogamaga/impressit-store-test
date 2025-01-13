import {useAuthorization} from "@/hooks/useAuthorization";
import {Text} from "react-native";
import {Redirect, Stack} from "expo-router";

export default function AppLayout() {
    const [isAuthorized, isLoadingComplete] = useAuthorization()
    if (!isLoadingComplete) {
        return <Text>Loading...</Text>;
    }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!isAuthorized) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/sign-in" />;
    }
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}