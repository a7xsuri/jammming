import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Tracklist from "../components/Tracklist";

function Spotify({token}){
    const [result, setResult] = useState('')
    
    return(
    <>
    <div className="container">
        <SearchBar setResult={setResult} token={token} />
        <SearchResults/>
        <Tracklist/>
    </div>
    </>
    )
}

export default Spotify;