const express = require('express');
const ChirpStore = require('../chirpstore');
const router = express.Router();

router.get("/:id?", (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(ChirpStore.GetChirp(id));
    } else {
        res.json(ChirpStore.GetChirps());
    }
});

router.put("/:id", (req, res) => {
    let id = req.params.id;
    ChirpStore.UpdateChirp(id, req.body);
    res.sendStatus(200);
});

router.post("/", (req, res) => {
    ChirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    ChirpStore.DeleteChirp(id);
    res.sendStatus(200);
});

module.exports = router;