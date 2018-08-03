const express = require('express')
const app = express()
const cors = require('cors')

const data = require('./data.json')

// function findById(id) {
//     return data.find(item => item.id === +id)
// }

function findById(id) {
    for (let i=0; i<data.length; i++) {
        if (data[i].id === +id) {
            return data[i]
        }
    }
    return null
}

app.use(cors())

app.get('/', (req, res, next) => {
    res.json({ data })
})

app.get('/:termId', (req, res, next) => {
    const item = findById(req.params.termId)

    if (!item) {
        res.status(404).json({
                error: {
                    message: "Item Not Found"
                } 
            })
        return
    }
    res.json({ data: item })   
    })

app.listen(9000)
console.log('Listening on http://localhost:9000')