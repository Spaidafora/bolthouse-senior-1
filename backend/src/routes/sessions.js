import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    
    res.send('Sessions page');
})

router.get('/:sessionId', (req, res) => {
    const sessionId = req.params.sessionId;
    res.send(`Session Id: ${sessionId}`)
})


export default router;