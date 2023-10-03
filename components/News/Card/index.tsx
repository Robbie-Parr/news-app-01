import React from 'react';
import { Button, Linking, StyleSheet, Text, View} from 'react-native';

import { itemType } from '../../../redux/actionTypes';
import useSwitch from '../../useSwitch';

import CardModal from './CardModal';
import store from '../../../redux/store';
import { create_Remove } from '../../../redux/actions';

const Card = ({data}:{data:itemType}) => {
    const {value,flip} = useSwitch()

    return (
        <View style={styles.container}>
            <CardModal data={data} active={value}/>
            
            {/*<Button title="Open" onPress={flip}/>*/}
            <View style={{width:"50%"}}>
              <Text style={{fontSize:15}}>{data.title}</Text>
              <Text>{data.image}</Text>
            </View>
            <View>
              <Button 
                title="Open Article" 
                onPress={() => Linking.openURL(data.url)}
                color="darkblue"/>
            </View>

            <View>
              <Button
                title="X"
                onPress={() => store.dispatch(create_Remove(data.title))}
                color="red"
                />
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#4746467c',
    marginLeft:"10%",
    marginRight:"10%",
    marginBottom:"2%",
    borderRadius:10,
    shadowRadius:10,
    shadowColor:"grey",
    padding:"1%",
    paddingBottom:"5%",
    justifyContent:"space-around"
  },
});
