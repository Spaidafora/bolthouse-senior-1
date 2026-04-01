import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

import authRouter from '../src/routes/auth.js';
import sessionRouter from '../src/routes/sessions.js';

app.get('/', (req, res) => {
    res.json({ message: "ok"})
    
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})



app.use('/auth', authRouter)
app.use('/sessions', sessionRouter)

