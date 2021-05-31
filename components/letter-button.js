import styles from './letter-button.module.css'
import { useState } from 'react';

export default function LetterButton({ letter, disabledProp, wrong, onClick }) {

    const classDisabled = !disabledProp ? null : wrong ? styles.wrong : styles.right

    return (
        <div>
            <button onClick={onClick} disabled={disabledProp} className={`${styles.button} ${classDisabled}`}>{letter}</button>
        </div>
    )
}