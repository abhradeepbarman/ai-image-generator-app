import React, { useContext, useEffect } from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "./../../constants/Colors";

function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.PRIMARY,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="collection"
                options={{
                    title: "Collections",
                    tabBarIcon: ({ color }) => (
                        <Entypo name="folder" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

export default TabLayout;
