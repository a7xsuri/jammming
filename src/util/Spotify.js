import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Tracklist from "../components/Tracklist";

function Spotify({token}){
    const [result, setResult] = useState('')
    const [selectedTrack, setSelectedTrack] = useState([])
    
    
    function handlerClick({target}){
        let song = target.parentElement.children[0].innerHTML
        let artist = target.parentElement.children[1].innerHTML
        let key = Math.floor(Math.random() * 1000)
        let obj = {key, song, artist}
        setSelectedTrack((prev)=>([obj, ...prev ]))
    }

    function removeItem({target}){
        let id = target.parentElement.id;
        
        setSelectedTrack((prev)=>{
            return prev.filter((item) => item.key !== Number(id))
        })
    }

    return(
    <>
    <div className="container">
        <SearchBar setResult={setResult} token={token} />
        <div className="row justify-content-around">
            <div className="col-md-5 overflow-scroll mt-5" style={{height : '70vh'}}>
                <SearchResults handlerClick={handlerClick} result={result} />
            </div>
            <div className="col-md-5 overflow-scroll mt-5" style={{height : '70vh'}}>
                <Tracklist selectedTrack={selectedTrack} removeItem={removeItem}/>
            </div>
        </div>
    </div>
    </>
    )
}

export default Spotify;