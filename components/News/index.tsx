import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { itemType } from '../../redux/actionTypes';

import store from "../../redux/store"

import Card from "./Card"
import { useSelector } from 'react-redux';

const NewsList = () => {
  const loading = useSelector<any,any>(state => state.loading)
  const list = useSelector<any,any>(state => state.list)
    
  return (
    <View style={styles.container}>
      {!loading && <>
        {list.map((data:itemType) => {
          return <Card key={data.title} data={data}/>})}
        </>
      }
    </View>
  );
}

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:"1%"
  },
});


