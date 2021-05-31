import styles from './pokemon-image.module.css'
import Image from 'next/image'

export default function PokemonImage({ pokemon }) {

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.avatar}>
                    <Image priority
                        src={pokemon.image}
                        //className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={pokemon.name} />
                </div>
            </div>
        </div>
    )
}