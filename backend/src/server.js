
import authRouter from '../src/routes/auth.js';
import sessionRouter from './routes/routes.sessions.js';


import express from 'express';
const app = express()
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.json({ message: "ok"})
    
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

//routes 

app.use('/api/auth', authRouter)
app.use('/api/sessions', sessionRouter)

