import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
    res.send("Registering a user");
})

router.post('/login', (req, res) => {
    res.send("Login page")

});


router.post('logout', (req, res) => {
    res.send("Logging out");
});


export default router;