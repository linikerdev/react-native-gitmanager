import { createAppContainer, createStackNavigator } from 'react-navigation'

import Feed from './pages/Feed'
import Home from './pages/Home'

export default createAppContainer(
    createStackNavigator({
        Home,
        Feed
    })
)