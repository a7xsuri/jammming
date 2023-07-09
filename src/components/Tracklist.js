import React from "react";
import { useState } from "react";
import Track from "./Track";

function Tracklist({selectedTrack, removeItem}){
    return (
        <div style={{width: '100%'}}>
            <Track selectedTrack={selectedTrack} removeItem={removeItem}/>
        </div>
    )
}

export default Tracklist