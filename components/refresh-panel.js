import styles from './refresh-panel.module.css'

export default function RefreshPanel({ onClick }) {

    return (
        <div className={styles.container}>
            <div className={styles.success}>Nice!</div>
            <button className={styles.button} onClick={onClick}>Refresh</button>
        </div>
    )
}