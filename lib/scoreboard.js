export default {
    uploadScore: async function (username, score) {
        try {
            await fetch('/api/scoreboard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, score })
            })
        } catch (error) {
            console.error(error)
        }
    },
    getScores: async function () {
        const response = await fetch('/api/scoreboard')
        const scores = await response.json()

        const scoresMap = Object.entries(scores).map((el) => ({ username: el[0], score: el[1] }))
        const sortedScores = scoresMap.sort((a, b) => (b.score - a.score))
        if (sortedScores.length > 10) {
            sortedScores.splice(10, sortedScores.length - 10)
        }

        return sortedScores
    }
}