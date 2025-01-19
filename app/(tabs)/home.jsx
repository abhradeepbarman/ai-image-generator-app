import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Banner from "../../components/Home/Banner";

const home = () => {
    return (
        <View style={{
            padding: 20,
        }}>
            {/* Header  */}
            <Header />

            {/* Banner  */}
            <Banner />
        </View>
    );
};

export default home;
