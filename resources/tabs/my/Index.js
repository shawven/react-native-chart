import React from 'react';
import {View, Text, Button} from 'react-native';
import { List, ListItem } from 'react-native-elements'
import StatusBar from '../../common/StatusBar';

const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
    ];


export default class MyTab extends React.Component {
    static navigationOptions = {
        title: "我的"
    };

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="light-content" backgroundColor="#383838"/>
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((l) => (
                            <ListItem
                                roundAvatar
                                avatar={{uri:l.avatar_url}}
                                key={l.name}
                                title={l.name}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}