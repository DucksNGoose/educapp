'use strict'
import {createStackNavigator} from 'react-navigation'
import Home from './home'

const NavApp = createStackNavigator({
  Home: {screen: Home}
});

export default NavApp; 
