import LetterButton from './letter-button'
import styles from './letters-panel.module.css'

export default function LettersPanel({ clickedLetters, pokemonLetters, onClick }) {

    function LetterButtonList() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const letterArray = letters.split('')
        const listItems = letterArray.map((letter) =>
            <LetterButton disabledProp={clickedLetters.includes(letter)} wrong={!pokemonLetters.includes(letter)} key={letter} letter={letter} onClick={() => onClick(letter)} />
        );
        return (
            <>
                { listItems}
            </>
        );
    }

    return (
        <div className={styles.container}>
            <LetterButtonList />
        </div>
    )
}