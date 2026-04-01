import express from 'express';
const router = express.Router();


router.get('/login', (req, res) => {
    res.send("Login page")


});

router.get('/register', (req, res) => {
    res.send("Registeration page")
});

router.get('logout', (req, res) => {
    res.send("Logging out");
});

export default router;