// Navigation/Navigation.js


import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
  SearchScreen: { 
    screen: Search,
    navigationOptions: {
      title: 'Search'
    }
  },
  FilmDetailScreen : {
    screen : FilmDetail
  }
})

export default createAppContainer(SearchStackNavigator)