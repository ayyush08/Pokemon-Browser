import React, { useState, useEffect } from "react";
import { useFetch } from './useFetch';

import Pokemon  from './pokemon'

const api = 'https://pokeapi.co/api/v2/pokemon?limit=5&offset=0';

const App = () => {
  const [url,setUrl] = useState(api);
  const {loading,data} = useFetch(url);
  const [pokemons,setPokemons] = useState([])

useEffect(()=>{
    if(data && data.results)
    setPokemons(prevPokemons => [...prevPokemons,...data.results])
},[data]);
if(loading) return <h1>Loading ...</h1>


const loadMore = ()=>{
  setUrl(data.next)
  console.log(url);
}
return (
  <section>
  <h1>POKEMONS:</h1>
  <div className="poks">
  <Pokemon pokemons={pokemons}/>
  </div>
  <button onClick={loadMore}>Load More</button>
  <p>Displaying {pokemons.length} Results...</p>
  </section>
)


};
export default App;
