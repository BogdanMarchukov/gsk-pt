const {Router} = require('express')
const CsvHandler = require('../models/CsvHandler')
const path = require('path')
const SaveObject = require('../models/mongoose/SaveObject')
const DataHandler = require('../models/DataHandler')

const router = Router()
const valid = ["number", "factH", "Indent"]
const csvHandler = new CsvHandler(path.join(__dirname, '../', 'uploads', 'editRp.csv'), valid)

router.post('/rp/file', async (req, res) => {
    try {
        await csvHandler.readCsv()
        if (csvHandler.validateData()) {
            const dataMongo = await SaveObject.findById(req.body.id)
            const dataHandler = new DataHandler({
                dataBase: dataMongo,
                dataAdd: csvHandler.data,
                keySearch: "number",
                field: 'rp'
            })

            dataHandler.sort()

            dataHandler.mergerData()


        }
        else {

            // res.send('Файл не соотверствует')
        }
    } catch (e) {
        console.log('error catch', e)
        // res.send(e)
    }


})

module.exports = router