import express from 'express'
import { Router } from 'express'

const router = Router()

router.get("/about", (req, res) => {
    res.send("This is about page")
})

router.get("/home", (req, res) => {
    res.send("This is home page")
})

export default router