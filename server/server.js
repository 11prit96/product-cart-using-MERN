import mongoose from 'mongoose'
import express from 'express'
import cartRoute from './routes/cart_routes.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hi there!')
})

app.use('/api/cart', cartRoute)

// try {
//     await mongoose.connect('mongodb+srv://prithwishjs:JUDe4Nk2FV7vDXTI@cluster0.nff9ft5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//     app.listen(5300, () => console.log(`Server Running on port 5300`))
// } catch (error) {
//     console.log(error);
//     process.exit(1)
// }
app.listen(5300, () => {
    console.log('Server is running.');
})