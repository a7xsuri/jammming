import React, { useEffect, useState } from "react";
import styles from './componentsStyling/Track.module.css';

function Track({result}){
   let renderList
   
   if(result){
      renderList = result.items.map(res=><li key={res.id} className={styles.track}><h2>{res.name}</h2><p className={styles.artist}>{res.artists[0].name}</p><span>+</span></li>)
   }

   return(
    <>
      {renderList}
    </>
 )
}

export default Track