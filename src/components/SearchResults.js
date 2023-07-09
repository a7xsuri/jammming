import React from "react";
import Track from "./Track";
import styles from './componentsStyling/SearchResults.module.css'

function SearchResults({result, handlerClick}){
    return(
        <>
        <div className={styles.backgroundResults}>
            <ul>
                <Track handlerClick={handlerClick} result={result}/>
            </ul>
        </div>
        </>
    )

}

export default SearchResults