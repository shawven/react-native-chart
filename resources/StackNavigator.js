import React from "react";
import {createBottomTabNavigator } from "react-navigation";
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import Chart from "./tabs/home/chart/Chart";

export default createBottomTabNavigator(
    // 配置 tab 路由
    {
        Chart: {
            screen: Chart
        }
    },
    // 其他配置选项
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
