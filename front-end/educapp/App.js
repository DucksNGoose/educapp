'use strict'
import {createStackNavigator} from 'react-navigation'
import Home from './home'
import VocationalTest from './vocationalTest'


const NavApp = createStackNavigator({
  Home: {screen: Home},
  VocationalTest: {screen: VocationalTest}
});

export default NavApp; 
