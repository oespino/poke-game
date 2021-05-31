export default async (req, res) => {
    const { id } = req.query
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const pokemonData = await pokemon.json()
    const pokemonSpecieURL = pokemonData.species.url
    const pokemonSpecie = await fetch(`${pokemonSpecieURL}`)
    const pokemonSpecieData = await pokemonSpecie.json()
    const responseData = {
        name: pokemonSpecieData.names.find(el => el.language.name === 'es').name,
        image: pokemonData.sprites.other['official-artwork'] || pokemonData.sprites.front_default
    }
    res.status(200).json(responseData)
}