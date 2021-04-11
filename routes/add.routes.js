const AddObject = require('../models/AddObject')

const {Router} = require('express')
const router = Router()

router.post('/save', async (req, res) => {
    const addObject = new AddObject()
        console.log("Я тут")
        let error = await addObject.start()
        res.send(JSON.stringify(error))



})

module.exports = router