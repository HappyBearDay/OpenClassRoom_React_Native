import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import films from '../Helpers/filmData'
import FilmItem from './FilmItem'


class Search extends React.Component {
    render(){ //Render Method is an obligation !!
        return (
            <View style= {styles.main_container}>
            <TextInput style={styles.textinput} 
            placeholder="Titre du Film"/>
            <Button style = {{height : 50}}
            title="Rechercher" onPress = {() => {
                console.log("you press the search button !")}}/>
            
            <FlatList  
            data={films} 
            keyExtractor={(item) => item.id.toString()}
            //renderItem={({item}) => <TextInput>{item.title }</TextInput>}
            
            
            renderItem={({item}) => <FilmItem film = {item}/>}
            />
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
    }
})

export default Search