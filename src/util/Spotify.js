import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Tracklist from "../components/Tracklist";

function Spotify({token}){
    const [result, setResult] = useState('')
    console.log(result)
    return(
    <>
    <div className="container">
        <SearchBar setResult={setResult} token={token} />
        <div className="row justify-content-around">
            <div className="col-md-5 overflow-scroll mt-5" style={{height : '70vh'}}>
                <SearchResults result={result} />
            </div>
            <div className="col-md-5">
                <Tracklist/>
            </div>
        </div>
    </div>
    </>
    )
}

export default Spotify;