// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View,TextInput, Text ,Image} from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        
        <Image style={styles.image} 
        source={{uri: "image"}}
        />
        
        <View style={styles.content_container}>
        {/*HEADER*/}
          <View style={styles.header_container}>
          {/*TITLE*/}
              <View style={styles.title_container}>
                  <Text style={styles.title_text}>Titre du film</Text>
              </View>
          {/*VOTE*/}
              <View style={styles.vote_container}>
                  <Text style={styles.vote_text}>Vote</Text>
              </View>
          </View>
        {/*DESCRIPTION*/}
          <View style={styles.description_container}>   
              <TextInput style={styles.description_text } numberOfLines={6}>Description</TextInput>
          </View>
        {/*FOOTER*/}
          <View style={styles.footer_container}>
            <TextInput style={styles.date_text}>Sorti le 00/00/0000</TextInput>
          </View>

        </View>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flex : 0,
   // backgroundColor : 'yellow',
    flexDirection :'row' //Vertical allignement
  },

  image: {
    flex : 1,
    //width : 120,
    //height : 180,
    margin: 3,

    backgroundColor : 'grey'
  },  
  
  content_container: {
    flex : 3
  },
  
  header_container: {
    flex : 3,
    flexDirection :'row' //Vertical allignement
  },

  //header's Subcontainers 
  title_container: {
    flex : 2
  },
  vote_container: {
    flex : 1
  },

  description_container: {
    flex : 7
  },
  
  footer_container: {
    flex : 1
  },

  //header' stytes
  title_text : {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },

  vote_text : {
    flex : 1,
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_text : {
    fontStyle: "italic",
    color : "#666666"
  },
  date_text : {
    textAlign: 'right',
    fontSize: 14
  }
  
})

export default FilmItem