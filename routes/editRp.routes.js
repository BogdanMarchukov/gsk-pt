const {Router} = require('express')
const CsvHandler = require('../models/CsvHandler')
const path = require('path')

const router = Router()
const valid = ["number", "factH", "Indent"]
const csvHandler = new CsvHandler(path.join(__dirname, '../', 'uploads', 'editRp.csv'), valid)

router.post('/rp/file', async (req, res)=> {
    try {
        await csvHandler.readCsv()
    }
    catch (e) {
        res.send(e)
    }


})

module.exports = router