import Express from 'express'

const app = Express()
const port = 3000

app.get('/', (req, res) => {
    res.send('This is the backend')
})

app.listen(port, () => {
    console.log(`Backend server listening at ${port}`)
})
