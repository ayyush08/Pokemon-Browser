
const Pokemon = ({pokemons})=>{
    // return (<h2>{pokemons}</h2>)
    // console.log(pokemons[0].name);
    return <>
        {pokemons.map((pokemon)=>{

return (
    <h2>{pokemon.name}</h2>
)
})}
    </>
}

export default Pokemon;