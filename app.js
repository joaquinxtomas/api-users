import express from 'express'
import { userRoutes } from './routes/users.js'

const app = express()

app.use(express.json())
app.disable('x-powered-by')

const PORT = 3020

app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log(`server in port ${PORT}`)
})