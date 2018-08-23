import {createStackNavigator } from "react-navigation";
import TabNavigator from "./TabNavigator";
import StackNavigator from "./StackNavigator";
import CardStackStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator";
import Chart from "./tabs/home/chart/Chart";
export default createStackNavigator(
    {
        Tabs: TabNavigator,
        Chart: {
            screen: Chart,
            navigationOptions: {
                headerTintColor: '#fff',
                headerTitleStyle: {flex:1, textAlign: 'center', fontWeight: 'normal'},
                headerStyle: {
                    backgroundColor: '#383838',
                },
            }
        }
    },
    {
        transitionConfig:() => {
            return {
                screenInterpolator: CardStackStyleInterpolator.forHorizontal
            }
        },
    }
)