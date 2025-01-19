import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const Banner = () => {
    return (
        <View
            style={{
                marginTop: 20,
            }}
        >
            <Image
                source={require("../../assets/images/banner.jpg")}
                style={{
                    width: "100%",
                    height: 140,
                    borderRadius: 15,
                }}
            />

            <View
                style={{
                    position: "absolute",
                    padding: 15,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: Colors.WHITE,
                    }}
                >
                    Turn Words
                </Text>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: Colors.YELLOW,
                    }}
                >
                    into ART
                </Text>
            </View>

            <TouchableOpacity
                style={{
                    padding: 7,
                    backgroundColor: Colors.YELLOW,
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    margin: 15,
                    borderRadius: 7,
                    paddingHorizontal: 15,
                }}
            >
                <Text>Explore</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({});
