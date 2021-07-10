export default async (req, res) => {
    try {
        const data = await fetch(process.env.DB_URL)
        const dataJson = await data.json()

        if (req.method === 'POST') {
            const reqBody = req.body
            const username = reqBody.username
            const score = reqBody.score

            if (!dataJson[username] || (dataJson[username] && dataJson[username] < score)) {
                dataJson[username] = score
            }

            await fetch(process.env.DB_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataJson)
            })
        }
        res.status(200).json(dataJson)
    } catch (error) {
        res.status(500).json(error)
    }
}