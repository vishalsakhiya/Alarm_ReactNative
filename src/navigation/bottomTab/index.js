import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../components/screens/Home/HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AlarmScreen from "../../components/screens/alarm/AlarmScreen";
import { CommonActions } from "@react-navigation/native";
import { StyleSheet, Vibration, TouchableOpacity, View, Text } from "react-native";
import Colors from "../../constants/Colors";

const BottomTab = createBottomTabNavigator();
let navigationProps;

// Define stackRest method to navigate to tab on-press tab
const stackRest = (navigation, tab) => {
    navigation.dispatch(
        CommonActions.reset({
            routes: [
                {
                    name: tab,
                    state: {
                        routes: [
                            { name: tab },
                        ]
                    }
                }
            ]
        })
    )
};

const BottomTabNavigation = () => {
    const MyTabBar = ({ state, descriptors, navigation }) => {
        navigationProps = navigation;
        const TabItem = (index, isFocused) => {
            const tabLable = ["Clock", 'Alarm'];
            function tabIconRender() {
                switch (index) {
                    case 0:
                        return "time-outline";
                    case 1:
                        return "alarm-outline";
                    default:
                        break;
                }
            };

            return (
                <>
                    <Ionicons name={tabIconRender()} size={25} color={!isFocused ? Colors.WHITE : Colors.PRIMARY_YELLOW} />
                    <Text style={{ color: !isFocused ? Colors.WHITE : Colors.PRIMARY_YELLOW, fontSize: 10, }}>{tabLable[index]}</Text>
                </>
            )
        }

        return (
            <View style={{ flexDirection: 'row', backgroundColor: Colors.BLACK_20 }}>
                {state?.routes?.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    const onPress = () => {
                        if (state.index != index) {
                            stackRest(navigation, state.routeNames[index])
                        }
                    }
                    return (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={1}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={() => { onPress() }}
                            style={[styles.tabBarButtonView]}
                        >
                            {TabItem(index, isFocused)}
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    return (
        <BottomTab.Navigator
            tabBar={props => <MyTabBar {...props} />}
            screenOptions={{ headerShown: false }} >
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Alarm" component={AlarmScreen} />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigation;


const styles = StyleSheet.create({
    tabBarButtonView: {
        flex: 1,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '1%',
        borderBottomColor: Colors.GRAY_TRANSPARENT
    },
    tabBarIconsView: {
        width: 30,
        height: 30
    },
    tabBarView: {
        flexDirection: 'row'
    },
})
