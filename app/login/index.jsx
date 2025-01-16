import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "./../../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
        // Warm up the android browser to improve UX
        // https://docs.expo.dev/guides/authentication/#improving-user-experience
        void WebBrowser.warmUpAsync();
        return () => {
            void WebBrowser.coolDownAsync();
        };
    }, []);
};

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow({
                    redirectUrl: Linking.createURL("/(tabs)/home", {
                        scheme: "myapp",
                    }),
                });

            // If sign in was successful, set the active session
            if (createdSessionId) {
                //   setActive!({ session: createdSessionId })
            } else {
                // Use signIn or signUp returned from startOAuthFlow
                // for next steps, such as MFA
            }
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2));
        }
    }, []);

    return (
        <View>
            <Image
                source={require("./../../assets/images/login.jpg")}
                style={{
                    width: "100%",
                    height: 500,
                }}
            />

            <View style={styles.loginContainer}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Welcome to ImagineAI
                </Text>

                <Text
                    style={{
                        color: Colors.GRAY,
                        textAlign: "center",
                        marginTop: 15,
                    }}
                >
                    Create AI art in just one click
                </Text>

                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 17,
                        }}
                    >
                        Continue
                    </Text>
                </TouchableOpacity>

                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 15,
                        fontSize: 13,
                        color: Colors.GRAY,
                    }}
                >
                    By continuing you agree to our Terms and Conditions
                </Text>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    loginContainer: {
        padding: 25,
        marginTop: -20,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 600,
    },
    button: {
        width: "100%",
        padding: "20",
        backgroundColor: Colors.PRIMARY,
        borderRadius: 40,
        marginTop: 20,
    },
});
