import styles from './pokemon-letter.module.css'

export default function PokemonLetter({ letter, clickedLetters }) {

    const value = clickedLetters.includes(letter) ? letter : '_'

    return (
        <div className={styles.letter}>
            {value}
        </div>
    )
}