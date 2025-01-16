import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import GlobalApi from "../../services/GlobalApi";

const home = () => {
    const { user } = useUser();
    return (
        <View>
            <Text>home</Text>
        </View>
    );
};

export default home;
