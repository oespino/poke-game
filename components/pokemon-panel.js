import PokemonLetter from './pokemon-letter'

export default function PokemonPanel({ pokemonLetters, clickedLetters }) {

    function PokemonLetterList() {
        const listItems = pokemonLetters.map((letter, index) =>
            <PokemonLetter key={index} letter={letter} clickedLetters={clickedLetters} />
        );
        return (
            <>
                {listItems}
            </>
        );
    }

    return (
        <div style={{ display: 'flex' }}>
            <PokemonLetterList />
        </div>
    )
}