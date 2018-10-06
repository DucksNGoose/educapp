'use strict'
import {createStackNavigator} from 'react-navigation'
import Home from './pages/home'
import Teste from './pages/teste'
import Eventos from './pages/eventos' 

const NavApp = createStackNavigator({
  Home: {screen: Home},
  Events : {screen: Eventos},
  Teste : {screen: Teste}
});

export default NavApp; 
