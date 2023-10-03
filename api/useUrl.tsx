import React,{useState,useEffect} from 'react';

const useUrl = (url:string) => {
    const [htmlData,setHtmlData] = useState("")

    useEffect(() => {
        fetch(url)
        //.then(response => response.json())
        //.then(setHtmlData)
        .then(console.log)
        
    },[url])

    return htmlData
}

export default useUrl;