import { useEffect, useState } from 'react';
import Spotify from './util/Spotify';
import './App.css';


function App() {
  const CLIENT_ID = '8a898db46e304bb39f874f6f79b58fa6'
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')


  useEffect(()=>{
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    if(!token && hash){
      token = hash.substring(1).split('&').find(elem=>elem.startsWith('access_token')).split('=')[1]
      
      window.location.has = '';
      window.localStorage.setItem('token', token)
    }
    setToken(token)
  },[])

  return (
    <div className="App">
      {!token ?
      <> 
      <h1>Spotify React</h1>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>login to spotify</a>
      </> : <Spotify token={token}/> }
    </div>
  );
}

export default App;
