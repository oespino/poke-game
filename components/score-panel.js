import styles from './score-panel.module.css'

export default function ScorePanel({ points }) {

    return (
        <div className={styles.container}>
            <div>Score: </div>
            <div className={styles.points}>{points}</div>
        </div>
    )
}