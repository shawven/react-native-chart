import React from "react";
import {createBottomTabNavigator } from "react-navigation";
import HomeStack from "./tabs/home/HomeStack";
import ContactStack from "./tabs/contact/ContactStack";
import DiscoveryStack from "./tabs/discovery/DiscoveryStack";
import MyStack from "./tabs/my/MyStack";
import Ionicons from 'react-native-vector-icons/Ionicons';

const tabNavigator = createBottomTabNavigator(
    // 配置 tab 路由
    {
        HomeStack: {
            screen: HomeStack,
            navigationOptions: () => ({
                tabBarLabel: "消息",
                tabBarIcon: ({ focused, tintColor }) => (<Ionicons
                    name="ios-text"
                    size={25}
                    style={{color: tintColor}}/> ),
            }),
        },
        ContactStack: {
            screen: ContactStack,
            navigationOptions: () => ({
                tabBarLabel: "联系人",
                tabBarIcon: ({ focused, tintColor }) => (<Ionicons
                    name="ios-contacts"
                    size={25}
                    style={{color: tintColor}}/> )
            }),
        },
        DiscoveryStack: {
            screen: DiscoveryStack,
            navigationOptions: () => ({
                tabBarLabel: "发现",
                tabBarIcon: ({ focused, tintColor }) => (<Ionicons
                    name="ios-compass"
                    size={25}
                    style={{color: tintColor}}/> )
            }),
        },
        MyStack: {
            screen: MyStack,
            navigationOptions: () => ({
                tabBarLabel: "我",
                tabBarIcon: ({ focused, tintColor }) => (<Ionicons
                    name='ios-person'
                    size={25}
                    style={{color: tintColor}}
                />)
            }),
        }
    },
    // 其他配置选项
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#62b900',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);

tabNavigator.navigationOptions = {
    header: null,
};

export default tabNavigator;