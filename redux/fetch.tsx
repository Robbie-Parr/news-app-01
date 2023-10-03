import {API_KEY} from "../env"

import { create_SetNextItems } from "./actions";

import store from "./store";


const fetchData = async (source:string) => {
        const data = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(response => response.articles)
        
        console.log(data[0].urlToImage)
        store.dispatch(create_SetNextItems(data))
}

export default fetchData;