import React from 'react'
import { View, Button, TextInput} from 'react-native'

class Search extends React.Component {
    render(){ //Render Method is an obligation !!
        return (
            <View>
            <TextInput placeholder="Titre du Film"/>
            <Button title="Rechercher" onPress = {() => {
                console.log("you press the search button !")}}/>
            </View>

        )
    }
}
    
export default Search