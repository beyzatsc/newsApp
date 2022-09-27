import React from 'react'
import { Text, StyleSheet,TouchableOpacity} from 'react-native'


const ShareButton = ({onPress, text}) => {
    return (
        <TouchableOpacity  onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}; 

const styles = StyleSheet.create({
    container:{
        backgroundColor:'purple',
        width:'49%',
        padding:15,
        margin:2,
        alignItems:'center',
        borderRadius:5,
    },
    text:{
        color:'black',
        fontSize:15,
        fontWeight:'bold',
    }
})

export default ShareButton