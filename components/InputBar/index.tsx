import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

import store from "../../redux/store";
import { create_GetNextItems } from '../../redux/actions';

const InputBar = () => {
    const [source,setSource] = useState("")

    return(
        <View style={{
        flexDirection:"row", 
        marginLeft:"15%", 
        marginRight:"15%",
        marginTop:"1%",
        justifyContent:"space-between",
        backgroundColor:"#42414132",
        borderRadius:10}}>
            <TextInput 
                value={source} 
                onChangeText={text => setSource(text)} 
                defaultValue='News Source'
                style={{width:"100%"}}/>
            <Button 
                title="Get New data" 
                onPress={() => store.dispatch(create_GetNextItems(source))}/>
    </View>)
}

export default InputBar