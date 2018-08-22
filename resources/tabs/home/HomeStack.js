import React from 'react';
import {createStackNavigator } from "react-navigation";
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

// 引入页面组件
import Home from "./Index";
import Chart from "./chart/Chart";

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
            headerTitleStyle: {flex:1, textAlign: 'center', fontWeight: 'normal'},
            headerStyle: {
                backgroundColor: '#383838',
            },
        },
        transitionConfig:() => {
            return {
                screenInterpolator: CardStackStyleInterpolator.forHorizontal
            }
        },
    }
);

export default HomeStack;