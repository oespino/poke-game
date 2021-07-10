import styles from './scoreboard.module.css'
import { useState, useEffect } from 'react';
import scoreService from '../lib/scoreboard'

export default function Scoreboard({ username, onNewPokemonClick }) {

    const [highscores, setHighscores] = useState([])

    useEffect(() => {
        const loadData = async function () {
            const response = await scoreService.getScores()
            setHighscores(response)
        }
        loadData()
    }, [])


    return (
        <div className={styles.container}>
            <h1>HIGHSCORES</h1>
            {highscores.map((score) => (
                <div className={username === score.username ? styles.scoreGreenRow : styles.scoreRow}>
                    <div className={styles.username}>{score.username}</div>
                    <div className={styles.score}>{score.score}</div>
                </div>
            ))}
            <button className={styles.button} onClick={onNewPokemonClick}>New pokemon</button>
        </div>
    )
}