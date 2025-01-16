import React, { useContext, useEffect } from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "./../../constants/Colors";
import GlobalApi from "../../services/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import { UserDetailsContext } from './../../context/UserDetailsContext';

function TabLayout() {
    const { user } = useUser();
    const {userDetail, setUserDetail} = useContext(UserDetailsContext);

    const verifyUser = async () => {
        const result = await GlobalApi.GetUserInfo(
            user?.primaryEmailAddress.emailAddress
        );

        if (result.data.data.length != 0) {
            setUserDetail(result.data.data);
            return;
        }

        try {
            const data = {
                username: user?.fullName,
                email: user?.primaryEmailAddress.emailAddress,
            };

            const userData = await GlobalApi.CreateUser(data);
            setUserDetail(userData.data.data);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        verifyUser();
    }, [user]);

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
