import { getRandomPokemon } from '../lib/pokemon'
import LettersPanel from '../components/letters-panel'
import PokemonPanel from '../components/pokemon-panel'
import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react';

export async function getServerSideProps(context) {
    const pokemon = await getRandomPokemon()
    return {
        props: {
            pokemon: pokemon
        }
    }
}

export default function Home({ pokemon }) {

    const [clickedLetters, setClickedLetters] = useState([]);
    const handleClick = function (letter) {
        setClickedLetters(clickedLetters.concat([letter]))
    }
    const pokemonLetters = pokemon.name.toUpperCase().split("").filter(letter => letter.match(/[A-Z]/))

    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet" />
            </Head>

            <PokemonPanel pokemonLetters={pokemonLetters} clickedLetters={clickedLetters} />

            <Image priority
                src={pokemon.image}
                //className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={pokemon.name} />
            <LettersPanel clickedLetters={clickedLetters} pokemonLetters={pokemonLetters} onClick={handleClick} />
        </div>
    )
}