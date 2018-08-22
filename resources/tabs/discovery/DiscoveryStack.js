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
            headerTitleStyle: {flex:1, textAlign: 'center', fontWeight: 'normal'},
            headerStyle: {
                backgroundColor: '#383838',
            },
        }
    }
);

export default DiscoveryStack;