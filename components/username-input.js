import styles from './username-input.module.css'
import { useState } from 'react';


export default function UsernameInput({ onClick }) {

    const [username, setUsername] = useState("")

    const usernameRegex = /^\w+$/

    const handleOnChangeUsername = function (newValue) {
        if (!newValue || usernameRegex.test(newValue)) setUsername(newValue)
    }

    return (
        <div className={styles.container}>
            <h1>Write your username</h1>
            <input className={styles.input} type='text' value={username} onChange={() => handleOnChangeUsername(event.target.value)} />
            <button className={styles.button} onClick={() => onClick(username)} disabled={!username} className={styles.button}>Go</button>
        </div>
    )
}