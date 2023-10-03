import { itemType,filterType } from "./actionTypes"


export const RESET = "RESET"
export const ADD_ITEM = "ADD_ITEM"
export const GET_NEXT_ITEMS = "GET_NEXT_ITEMS"
export const SET_FILTER = "SET_FILTER"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const SET_NEXT_ITEMS = "SET_NEXT_ITEMS"


export const create_RESET = () => ({
    type:RESET,
    payload:{}
})


export const create_AddItem = (item:itemType) => ({
    type: ADD_ITEM,
    payload: {item}
})


export const create_GetNextItems = (source:string) => ({
    type:GET_NEXT_ITEMS,
    payload:{source}
})


export const create_SetFilter = (filter:filterType) => ({
    type:SET_FILTER,
    payload:{filter}
})


export const create_Remove = (title:itemType["title"]) => ({
    type:REMOVE_ITEM,
    payload:{title}
})

export const create_SetNextItems = (items:itemType[]) => ({
    type:SET_NEXT_ITEMS,
    payload:{items}
})