const {Router} = require('express')
const CsvHandler = require('../models/CsvHandler')
const path = require('path')
const SaveObject = require('../models/mongoose/SaveObject')
const DataHandler = require('../models/DataHandler')


const router = Router()


router.post('/rp/file', async (req, res) => {
    const valid = ["number", "factH", "Indent"]
    const csvHandler = new CsvHandler(path.join(__dirname, '../', 'uploads', 'editRp.csv'), valid)
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
            const result = await SaveObject.findByIdAndUpdate(req.body.id, {rp: dataHandler.dataBase.rp}, {new: true})
            res.send(JSON.stringify(result))

        }
        else {
             res.send(JSON.stringify({error: "файл не соответствует"}))
        }
    } catch (e) {
        res.send(JSON.stringify({error: "ошибка на сервере"}))

    }


})

module.exports = router