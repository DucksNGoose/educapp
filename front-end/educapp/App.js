'use strict'
import {createStackNavigator} from 'react-navigation'
import Home from './home'
import VocationalTest from './vocationalTest'
import Curses from './cursos' 
import Livros from './livros'

const NavApp = createStackNavigator({
  Home: {screen: Home},
  VocationalTest: {screen: VocationalTest},
  Curses : {screen: Curses},
  Livros : {screen: Livros}
});

export default NavApp; 
