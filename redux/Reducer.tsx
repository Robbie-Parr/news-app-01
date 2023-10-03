import { 
    RESET,
    ADD_ITEM,
    GET_NEXT_ITEMS,
    SET_FILTER,
    REMOVE_ITEM,
    SET_NEXT_ITEMS } from "./actions"

import {itemType} from "./actionTypes"

import { AnyAction } from "@reduxjs/toolkit";
import fetchData from "./fetch";

const Reducer = (state:any,action:AnyAction) => {
    switch(action.type){
        case RESET:
            return {...state, list:[]}
        case ADD_ITEM:
            const {item} = action.payload
            return {...state,list:[...state.list,item]}
        case GET_NEXT_ITEMS:
            const {source} = action.payload
            fetchData(source)
            return {...state,loading:true}
        case SET_NEXT_ITEMS:
            const {items} = action.payload
            if(state.list){
                const newList = new Set([...state.list,...items])
            return {...state,list:[...newList.values()],loading:false}
            }else{
                return {...state,list:[...items],loading:false}
            }
        case SET_FILTER:
            const {filter} = action.payload
            const filteredList:itemType[] = [...state.list]
            //apply filter to list
            return {...state,list:filteredList}
        case REMOVE_ITEM:
            const {title} = action.payload
            const newList:itemType[] = state.list.filter((item:itemType) => item.title!=title)
            return {...state,list:newList}
        default:
            return state
    }
}

export default Reducer;