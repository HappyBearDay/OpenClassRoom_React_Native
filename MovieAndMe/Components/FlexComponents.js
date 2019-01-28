import React from 'react'
import { StyleSheet, View, Button, TextInput} from 'react-native'

class FlexComponents extends React.Component {
    render(){ //Render Method is an obligation !!
        return (
            /**
            <View style=  {styles.mainviews }>
             <View style= {{flex : 1,  backgroundColor : 'red'}}></View>
             <View style= {{flex : 3,  backgroundColor : 'green'}}></View>
            </View>
             **/
            <View style=  {[styles.mainviews, {alignItems : "center", justifyContent : "center"} ]}>
             <View style= {{height : 50, width : 50,  backgroundColor : 'red'}}></View>
             <View style= {{height : 50, width : 50,  backgroundColor : 'green'}}></View>
             <View style= {{height : 50, width : 50,  backgroundColor : 'blue'}}></View>
            
            </View>
            
        )
    }
}
    


const styles = StyleSheet.create({
    mainviews : {
        flex : 1, 
        backgroundColor : 'purple', 
        //flexDirection :'row' //Vertical allignement

    }
})

export default FlexComponents