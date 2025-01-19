import React, { useContext, useEffect } from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "./../../constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { database, config } from "../../lib/appwrite";
import { ID, Query } from "react-native-appwrite";
import { UserDetailContext } from "../../context/UserDetailContext";

function TabLayout() {
    const { user } = useUser();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    const verifyUser = async () => {
        try {
            const result = await database.listDocuments(
                config.db_id,
                config.collections.user,
                [Query.equal("email", user.primaryEmailAddress.emailAddress)]
            );

            if (result.documents.length != 0) {
                setUserDetail({
                    username: result.documents[0].username,
                    email: result.documents[0].email,
                    credits: result.documents[0].credits,
                });
                return;
            }

            const newUser = await database.createDocument(
                config.db_id,
                config.collections.user,
                ID.unique(),
                {
                    email: user.primaryEmailAddress.emailAddress,
                    username: user?.fullName,
                }
            );

            setUserDetail({
                username: newUser.username,
                email: newUser.email,
                credits: newUser.credits,
            });
        } catch (error) {
            console.log("Error verifying user: ", error);
        }
    };

    useEffect(() => {
        user && verifyUser();
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
