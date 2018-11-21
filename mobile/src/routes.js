import {createAppContainer, createStackNavigator} from 'react-navigation';

import Login from './pages/Login'
import New from './pages/New'
import Timeline from './pages/Timeline'

const AppNavigator = createStackNavigator({
    Login,
    New,
    Timeline
})

const Routes = createAppContainer(AppNavigator);



export default Routes;