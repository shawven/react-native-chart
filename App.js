import React from 'react';
import {View, Text, Button, StatusBar, SectionList, StyleSheet} from 'react-native';

import {createStackNavigator,createBottomTabNavigator } from "react-navigation";

import AppNavigator from './resources/AppNavigator'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <AppNavigator/>
        )
    }
}

