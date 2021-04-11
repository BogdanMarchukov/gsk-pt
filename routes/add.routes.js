const AddObject = require('../models/AddObject')

const {Router} = require('express')
const router = Router()

router.post('/save', async (req, res) => {
    const addObject = new AddObject()
    let error = await addObject.start()
    //console.log(error)
    res.send(JSON.stringify(error))

})

module.exports = router