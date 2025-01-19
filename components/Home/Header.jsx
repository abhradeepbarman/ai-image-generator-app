import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Colors from "../../constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { UserDetailContext } from "../../context/UserDetailContext";

const Header = () => {
    const { user } = useUser();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    color: Colors.PRIMARY,
                    fontWeight: "bold",
                }}
            >
                Imagine AI
            </Text>

            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 0.4,
                        borderRadius: 99,
                        paddingHorizontal: 6,
                        paddingVertical: 4
                    }}
                >
                    <Image
                        source={require("../../assets/images/credit.png")}
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                    <Text>{userDetail?.credits}</Text>
                </View>
                <Image
                    source={{ uri: user?.imageUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 99,
                    }}
                />
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
