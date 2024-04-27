import React, { useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "../components/screens/getStarted/GetStartedScreen";
import BottomTabNavigation from "./bottomTab";
import { useSelector } from "react-redux";
import notifee from '@notifee/react-native'

const Stack = createStackNavigator();

const AppNavigator = () => {

    useEffect(() => {
        createChannel();
    }, [])

    const isUser = useSelector((state) => {
        try {
            const user = state.dataReducer.userInfo;
            if (user != undefined && Object.keys(user).length != 0) return true
            else return false
        } catch (error) {
            console.log("🚀 ~ file: navigation index.js ~ isUser ~ error:", error)
            return false
        }
    });
    async function createChannel() {
        const channelId = await notifee.createChannel({
            id: 'NotificationChannel',
            name: 'NotificationChannel',
            vibration: true,
        });
    }

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            border: "transparent",
        }
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isUser ? "BottomTab" : "GetStartedScreen"}  >
                <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;