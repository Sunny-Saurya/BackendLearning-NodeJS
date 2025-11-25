import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    res.send("welcome to the landing page")
})
router.get("/home", (req, res) => {
    res.send("welcome to the home page")
})
router.get("/about", (req, res) => {
    res.send("welcome to the about page")
})

export default router;