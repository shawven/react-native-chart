import React from 'react';
import { SectionList, StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman amazonaws'
    },
    {
        name: 'Whisky',
        avatar_url: 'https://placeimg.com/140/140/any',
        subtitle: 'https://placeimg.com/140/140/any'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'adhamdannaway'
    },
    {
        name: 'Whisky',
        avatar_url: 'https://placeimg.com/140/140/any',
        subtitle: 'Vice President'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '/faces/twitter/ladyle'
    },

];

export default class ChartList extends React.Component {

    constructor(props) {
        super(props);
    }

    redirectChartPage = (item) => {
        this.props.navigation.navigate('Chart', {item})
    };

    _keyExtractor = (item, index) => '' + index;

    _renderItem = ({item, index}) => {
        return (
            <ListItem containerStyle={{borderBottomWidth: 0.5, borderTopWidth: 0}}
                roundAvatar
                key={index}
                title={item.name}
                subtitle={item.subtitle}
                avatar={{uri:item.avatar_url}}
                rightIcon={(
                    <View style={{flex: 1, flexDirection:'column', alignItems: 'flex-end',}}>
                        <Text>10:30</Text>
                        <Icon name="ios-notifications-off" size={20}/>
                    </View>
                )}
                onPress={() => this.redirectChartPage(item)}
            />
        )
    };

    render () {
        return (
            <List containerStyle={{marginTop: 0, borderTopWidth:0.5, }}>
                <FlatList
                    data={list}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </List>
        )
    }
}
