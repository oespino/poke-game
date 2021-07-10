import styles from './score-panel.module.css'

export default function ScorePanel({ username, points }) {

    return (
        <div className={styles.container}>
            <div>{username}</div>
            <div className={styles.subcontainer}>
                <div>Score: </div>
                <div className={styles.points}>{points}</div>
            </div>
        </div>
    )
}