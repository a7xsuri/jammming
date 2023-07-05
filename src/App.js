import { useEffect, useState } from 'react';
import Spotify from './util/Spotify';
import './App.css';


function App() {
  const CLIENT_ID = '8a898db46e304bb39f874f6f79b58fa6'
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')
  const [searchKey, setSearchKey] = useState('')
  let prova;

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

  const handlerSubmit = async (e) =>{
    e.preventDefault()
    const data = await fetch('https://api.spotify.com/v1/search?q=' +searchKey + '&type=track', {
      headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    }).then(response=>response.json()).then(data=>console.log(data))
  }
  console.log(handlerSubmit)

  return (
    <div className="App">
      <h1>Spotify React</h1>
      {!token ? <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>login to spotify</a>  : <h1>Good</h1>}
      {token ? 
      <form onSubmit={handlerSubmit}>
        <input type='text' value={searchKey} onChange={e=>setSearchKey(e.target.value)}></input>
        <button type='submit'>Search</button>
      </form> : <h2>cioa</h2>}
      </div>
  );
}

export default App;
