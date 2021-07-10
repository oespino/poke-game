import { getRandomPokemon } from '../lib/pokemon'
import scoreService from '../lib/scoreboard'
import LettersPanel from '../components/letters-panel'
import PokemonPanel from '../components/pokemon-panel'
import PokemonImage from '../components/pokemon-image'
import ScorePanel from '../components/score-panel'
import UsernameInput from '../components/username-input'
import Scoreboard from '../components/scoreboard'
import RefreshPanel from '../components/refresh-panel'
import Head from 'next/head'
import { useState } from 'react';

export async function getServerSideProps(context) {
    const pokemon = await getRandomPokemon()
    return {
        props: {
            initialPokemon: pokemon
        }
    }
}

export default function Home({ initialPokemon }) {

    const [clickedLetters, setClickedLetters] = useState([]);
    const [score, setScore] = useState(0);
    const [username, setUsername] = useState("");
    const [finished, setFinished] = useState(false);
    const [pokemon, setPokemon] = useState(initialPokemon);
    const [viewHallOfFame, setViewHallOfFame] = useState(false)

    const pokemonLetters = pokemon.name.toUpperCase().split("").filter(letter => letter.match(/[A-Z]/))

    const handleLetterClick = function (letter) {
        const newClickedLetters = [letter, ...clickedLetters]
        setClickedLetters(newClickedLetters)

        if (!pokemonLetters.includes(letter)) setScore(score - 15)
        const newFinished = pokemonLetters.every(v => newClickedLetters.includes(v))
        if (newFinished) setScore(score + 50)
        setFinished(newFinished)
    }

    const handleNewPokemonClick = async function () {
        const newPokemon = await getRandomPokemon()
        setViewHallOfFame(false)
        setClickedLetters([])
        setFinished(false)
        setPokemon(newPokemon)
    }

    const handleUploadScoreClick = async function () {
        await scoreService.uploadScore(username, score)
        setViewHallOfFame(true)
    }

    const handleUsernameClick = async function (username) {
        setUsername(username)
    }

    const renderBottomPanel = function () {
        if (finished) return (
            <RefreshPanel onNewPokemonClick={handleNewPokemonClick} uploadScoreClick={handleUploadScoreClick} />
        )
        else return (
            <LettersPanel clickedLetters={clickedLetters} pokemonLetters={pokemonLetters} onClick={handleLetterClick} />
        )
    }

    const renderState = function () {
        if (!username) {
            return <UsernameInput onClick={handleUsernameClick} />
        } else if (viewHallOfFame) {
            return <Scoreboard username={username} onNewPokemonClick={handleNewPokemonClick} />
        }
        else {
            return (
                <>
                    <ScorePanel username={username} points={score} />

                    <PokemonImage pokemon={pokemon} />

                    <PokemonPanel pokemonLetters={pokemonLetters} clickedLetters={clickedLetters} />

                    {renderBottomPanel()}
                </>
            )
        }
    }

    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid&display=swap" rel="stylesheet" />
            </Head>

            {renderState()}
        </div>
    )
}