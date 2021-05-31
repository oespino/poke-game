
export async function getRandomPokemon() {
    const id = Math.floor(Math.random() * 151) + 1 // Random ID from 1 to 151 
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const pokemonData = await pokemon.json()
    const pokemonSpecieURL = pokemonData.species.url
    const pokemonSpecie = await fetch(`${pokemonSpecieURL}`)
    const pokemonSpecieData = await pokemonSpecie.json()
    const responseData = {
        name: pokemonSpecieData.names.find(el => el.language.name === 'es').name,
        image: pokemonData.sprites.other['official-artwork']['front_default'] || pokemonData.sprites.front_default
    }
    return responseData
}