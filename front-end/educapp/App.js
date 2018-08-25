'use strict'
import {createStackNavigator} from 'react-navigation'
import Home from './components/home'
import VocationalTest from './components/homeTest'
import Teste from './components/teste'
import Curses from './components/cursos' 
import Livros from './components/livros'

const NavApp = createStackNavigator({
  Home: {screen: Home},
  VocationalTest: {screen: VocationalTest},
  Curses : {screen: Curses},
  Livros : {screen: Livros},
  Teste : {screen: Teste}
});

export default NavApp; 
