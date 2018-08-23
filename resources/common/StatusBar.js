import React from 'react';
import {StatusBar} from 'react-native';

export default class DefaultStatusBar extends React.Component {
    render() {
        return <StatusBar barStyle="light-content" backgroundColor="#383838"/>;
    }
}