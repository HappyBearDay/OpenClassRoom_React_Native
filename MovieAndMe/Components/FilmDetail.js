// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'


class FilmDetail extends React.Component {
    render() {
        return(
            <View style={styles.main_container}>
                <Text>Détail du film</Text>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container : {
        flex : 1,
    }
})


export default FilmDetail
