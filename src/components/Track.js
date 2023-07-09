import React, { useEffect, useState } from "react";
import styles from './componentsStyling/Track.module.css';

function Track({result, handlerClick, selectedTrack, removeItem}){
   const [playlist, setPlaylist] = useState('')
   let renderList

   function handlerChange({target}){
      setPlaylist(target.value)
   }

   function handlerSubmit(e){
      e.preventDefault();
      console.log(playlist)
   }   

   if(result){
      renderList = result.items.map(res=><li key={res.id} className={styles.track}><h2>{res.name}</h2><p className={styles.artist}>{res.artists[0].name}</p><span onClick={handlerClick}>+</span></li>)
      return(
         <>
           {renderList}
         </>
      )
   }
   if(selectedTrack){
      renderList = selectedTrack.map(res=><li id={res.key} key={res.key} className={styles.track}><h2>{res.song}</h2><p className={styles.artist}>{res.artist}</p><span onClick={removeItem}>-</span></li>)
      return(
         <>
         <form onSubmit={handlerSubmit}>
            <input type="text" value={playlist} onChange={handlerChange} placeholder="name playlist" />
            <input type="submit" value='create playlist' />
         </form>
           {renderList}
         </>
      )
   }
}

export default Track