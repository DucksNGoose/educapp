'use strict'
import {createStackNavigator} from 'react-navigation'
import Home from './pages/home'
import VocationalTest from './pages/homeTest'
import Teste from './pages/teste'
import Curses from './pages/cursos' 
import Livros from './pages/livros'

const NavApp = createStackNavigator({
  Home: {screen: Home},
  VocationalTest: {screen: VocationalTest},
  Curses : {screen: Curses},
  Livros : {screen: Livros},
  Teste : {screen: Teste}
});

export default NavApp; 
