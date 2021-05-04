const {Router} = require('express')
const router = Router()
const SaveObject = require('../models/mongoose/SaveObject')

router.get('/fetch', async (req, res) => {
    try {
        const result = await SaveObject.find()
        res.send(JSON.stringify(result))
    }catch (e) {
        console.log(e)
    }
})

module.exports = router