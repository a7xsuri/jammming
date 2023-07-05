import React from "react";
import { useState } from "react";

function SearchBar({setResult, token}){
    const [searchKey, setSearchKey] = useState('')
    const handlerSubmit = async (e) =>{
        e.preventDefault()
        const data = await fetch('https://api.spotify.com/v1/search?q=' +searchKey + '&type=track', {
          headers: {
            'Authorization' : `Bearer ${token}`,
            'Content-type': 'application/json'
          }
        }).then(response=>response.json()).then(data=>setResult(data))
    }

    return(<>
      <form onSubmit={handlerSubmit}>
        <input type='text' value={searchKey} onChange={e=>setSearchKey(e.target.value)}></input>
        <button type='submit'>Search</button>
      </form>
    </>)
}

export default SearchBar;