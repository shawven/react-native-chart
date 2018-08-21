import React from 'react';
import {createStackNavigator } from "react-navigation";

// 引入页面组件
import Home from "./Index";

// 配置路由
const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home
        }
    },
    {
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#383838',
            },
        }
    }
);

// function select(store) {
//     return {
//         tab: store.navigation.tab,
//         isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogin
//     };
// }

export default HomeStack;