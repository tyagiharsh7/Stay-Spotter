import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.status(200).send("Rooms Route Endpoint");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

export default router;