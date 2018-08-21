import React from 'react';
import {View, Text, Button, StatusBar, SectionList, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements'
import ChartList from './chart/ChartList'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component {
    static navigationOptions = {
        headerTitle: "消息列表",
        headerRight: (
            <Icon.Button name="ios-add" size={30} backgroundColor="#383838" />
        ),
    };

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="light-content" backgroundColor="#383838"/>
                <SearchBar lightTheme placeholder='搜索' icon={{ type: 'font-awesome', name: 'search' }}/>
                <ChartList/>
            </View>
        );
    }

}
