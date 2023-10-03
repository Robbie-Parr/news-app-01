import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

import { Provider } from "react-redux";
import store from "./redux/store";
import { create_GetNextItems } from './redux/actions';

import NewsList from './components/News';
import InputBar from './components/InputBar';

export default function App() {
  const [hydrate,setHydrate] = useState(false)

  useEffect(() => {
    store.dispatch(create_GetNextItems("bbc-news"))
    setHydrate(true)
    }
  ,[])

  return (
    <Provider store={store}>
    <View style={styles.container}>
    {hydrate && <>
      <InputBar/>
      <NewsList/>
      </>}
      
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
