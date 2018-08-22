import React from 'react';
import {View, Text, Button, SectionList, StyleSheet} from 'react-native';
import StatusBar from '../../common/StatusBar';
import { SearchBar } from 'react-native-elements'
import ChartList from './chart/ChartList'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component {
    static navigationOptions = {
        headerTitle: "消息",
        headerLeft: <View/>,
        headerRight: <Icon.Button name="ios-add" size={30} backgroundColor="#383838" />,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <StatusBar/>
                {/*<SearchBar*/}
                    {/*lightTheme*/}
                    {/*placeholder='搜索'*/}
                    {/*inputStyle={{backgroundColor:'#fff', }}*/}
                    {/*icon={{type: 'ionicon', name: 'ios-search'}}*/}
                    {/*clearIcon={{type: 'ionicon', name: 'ios-close'}}*/}
                    {/*onChangeText={() => {}}*/}
                    {/*onClearText={() => {}}/>*/}
                <ChartList navigation={this.props.navigation}/>
            </View>
        );
    }

}
