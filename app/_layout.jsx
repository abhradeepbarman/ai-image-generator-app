import { Stack } from "expo-router";
import { tokenCache } from "./../cache";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { UserDetailsContext } from "./../context/UserDetailsContext";
import { useState } from "react";

export default function RootLayout() {
    const [userDetail, setUserDetail] = useState();

    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

    if (!publishableKey) {
        throw new Error(
            "Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file"
        );
    }

    return (
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
            <ClerkLoaded>
                <UserDetailsContext.Provider
                    value={{ userDetail, setUserDetail }}
                >
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="(tabs)" />
                        <Stack.Screen
                            name="login/index"
                            options={{ headerShown: false }}
                        />
                    </Stack>
                </UserDetailsContext.Provider>
            </ClerkLoaded>
        </ClerkProvider>
    );
}
