import React from "react";
import { useEffect, useState } from "react";


function Spotify({token}){
    const [data, setData] = useState()
    useEffect(()=>{
        const response = fetch('https://api.spotify.com/v1/search', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method,
            body:JSON.stringify(data)
        })
        return response.json
    }, [])
}

export default Spotify;