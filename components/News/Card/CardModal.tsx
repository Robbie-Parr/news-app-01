import React from 'react';
import { StyleSheet, Text, View,Modal } from 'react-native';

import { itemType } from '../../../redux/actionTypes';

import store from "../../../redux/store";
import useUrl from '../../../api/useUrl';


const CardModal = ({data,active}:{data:itemType,active:boolean}) => {
  //const htmlData = useUrl(data.url)

    return (
        <Modal style={styles.container} visible={active}>
          <Text>{data.title}</Text>
            
        </Modal>
    );
}

export default CardModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
