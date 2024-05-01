import express from 'express'
import cartRoute from './routes/cart_routes.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hi there!')
})

app.use('/api/cart', cartRoute)

app.listen(5300, () => {
    console.log('Server is running.');
})