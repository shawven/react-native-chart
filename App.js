import React from 'react';
import TabNavigator from './resources/TabNavigator'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <TabNavigator/>
        )
    }
}