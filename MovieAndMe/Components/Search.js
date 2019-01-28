import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, ActivityIndicator, Text} from 'react-native'
import films from '../Helpers/filmData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBapi'

class Search extends React.Component {

    constructor(props){
       super(props)
       this.state = {   
        films : [],
        isLoading : false}
        this.page = 0,
        this.totalPages = 0,
        this.searchedText = ""
    }

    _loadFilm() {
        if(this.searchedText.length > 0){
            this.setState( {isLoading : true})
            getFilmsFromApiWithSearchedText(this.searchedText,this.page+1 ).then(data => { 
            this.page = data.page
            this.totalPages = data.total_pages

            this.setState({
                films: [...this.state.films , ...data.results],
                //films: this.state.films.concat(data.results),
                isLoading : false
            })
            })
        }
    }

    _searchFilms(){
        this.page = 0
        this.totalPages = 0
        this.setState({
            films : []
        },
        //This block is executed after the first
        () => {
            console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
            this._loadFilm()
        }
        )
        //console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }


    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
      }


    render(){ //Render Method is an obligation !!
        console.log("render")
        return (
            <View style= {styles.main_container}>
            <TextInput onSubmitEditing={() => (this._searchFilms())} onChangeText={ (text) => this._searchTextInputChanged(text) } style={styles.textinput} 
            placeholder="Titre du Film"/>
            <Button style = {{height : 50}}
            title="Rechercher" onPress = {() => this._searchFilms()}/>
            

            <FlatList  
            data={this.state.films} 
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold = {0.5}
            onEndReached={() => {
                console.log("onEndReached")
                if( this.page < this.totalPages){
                   this._loadFilm() 
                }
            }}
            renderItem={({item}) => <FilmItem film = {item}/>}
            />
            {this._displayLoading()}
            </View>

        )
    }
}
    

const styles = StyleSheet.create({
    main_container : {
        marginTop:20,
        flex : 1

    },
    textinput : { 
        marginLeft: 5,
        marginRight: 5, 
        height: 50, 
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default Search