import React from 'react';
import {createStackNavigator } from "react-navigation";

// 引入页面组件
import Discovery from "./Index";


// 配置路由
const DiscoveryStack = createStackNavigator(
    {
        Discovery: {
            screen: Discovery
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

export default DiscoveryStack;