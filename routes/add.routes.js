const AddObject = require('../models/AddObject')

const {Router} = require('express')
const router = Router()

router.post('/save', async (req, res) => {
        const result = await AddObject.start()
        res.send(JSON.stringify(result))
        AddObject.restartSate()

})

module.exports = router