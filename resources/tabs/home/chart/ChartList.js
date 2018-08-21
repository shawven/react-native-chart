import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements'

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
    {
        name: 'Whisky',
        avatar_url: 'https://placeimg.com/140/140/any',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Whisky',
        avatar_url: 'https://placeimg.com/140/140/any',
        subtitle: 'Vice President'
    },
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

export default class ChartList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List containerStyle={{marginTop: 0, marginBottom: 20}}>
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
        );
    }
}
