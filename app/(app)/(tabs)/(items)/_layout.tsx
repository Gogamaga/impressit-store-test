import { Stack } from 'expo-router';


export default function ItemsLayout() {
    return (
        <Stack >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="cart" options={{  headerBackTitle: 'back', headerTitle: 'Cart' }} />
        </Stack>
    );
}
