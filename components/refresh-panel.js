import styles from './refresh-panel.module.css'

export default function RefreshPanel({ onNewPokemonClick, uploadScoreClick }) {

    const handleUploadScore = async function () {
        await fetch('/api/scoreboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: 'pruebaAfuego', score: 12341234 })
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.success}>Nice!</div>
            <button className={styles.button} onClick={onNewPokemonClick}>New pokemon</button>
            <button className={styles.button} onClick={uploadScoreClick}>Upload score</button>
        </div>
    )
}