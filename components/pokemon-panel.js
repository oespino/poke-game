import PokemonLetter from './pokemon-letter'
import styles from './pokemon-panel.module.css'

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
        <div className={styles.container}>
            <PokemonLetterList />
        </div>
    )
}