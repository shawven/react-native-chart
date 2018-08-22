import React from 'react';
import {createStackNavigator } from "react-navigation";

// 引入页面组件
import Contact from "./Index";

// 配置路由
const ContactStack = createStackNavigator(
    {
        Contact: {
            screen: Contact
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

export default ContactStack;