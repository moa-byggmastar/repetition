'use client'
import React from 'react'
import { useEffect, useState } from 'react'

export default function GameList() {
    const [games, setGames] = useState<string[]>([])
    const [input, setInput] = useState('')
    const [sortAlpha, setSortAlpha] = useState(false)

    //Load games from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("games")
        if (stored) {
            setGames(JSON.parse(stored))
        }
    }, [])

    //Save games in localStorage whenever games change
    useEffect(() => {
        localStorage.setItem('games', JSON.stringify(games))
    }, [games])

    const addGame = () => {
        if (input.trim() !== '') {
            setGames([...games, input.trim()])
            setInput('')
        }
    }

    const displayedGames = sortAlpha ? [...games].sort((a, b) => a.localeCompare(b)) : games

    return (
        <div>
            <h2>Game List</h2>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Write your favourite game' />
            <button onClick={addGame}>Add</button>
            <button onClick={() => setSortAlpha(!sortAlpha)}>
                {sortAlpha ? 'Unsort' : 'Sort Alphabetically'}
            </button>

            <ul>
                {displayedGames.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
        </div>
    )
}
