const {Router} = require('express')
const router = Router()
const CsvHandler = require('../models/CsvHandler')
const path = require('path')
const SaveObject = require('../models/mongoose/SaveObject')
const DataHandler = require("../models/DataHandler");

router.post('/add-fact-data', async (request, response)=> {

    try{
        // создание массива полей для валидации
        function validReturn(inputH, inputD) {
            if (inputH === 'true' && inputD === 'true'){
                return ["number", "factH", "Indent"]
            }else if (inputH === 'true') {
                return ["number", "factH"]
            } else if (inputD === 'true') {
                return ["number", "Indent"]
            }
        }
        const csvHandler = new CsvHandler(path.join( __dirname, '../', 'uploads', 'factDataRp.csv'), validReturn(request.body.inputH , request.body.inputD))
        await csvHandler.readCsv() // чтение csv файла
        if (csvHandler.validateData()) { // валидация файла
            const dataRp = await SaveObject.findById(request.body.id)
            const dataHandler = new DataHandler({
                dataBase: dataRp,
                dataAdd: csvHandler.data,
                keySearch: "number",
                field: 'rp'
            })
            dataHandler.sort()
            dataHandler.mergerData()
            const result = await SaveObject.findByIdAndUpdate(request.body.id, {rp: dataHandler.dataBase.rp}, {new: true})
            response.send(JSON.stringify(result))
        } else {
            response.json({error: true , errorMassage: 'файл не соответвстует'})
        }


    } catch (e){}
})

module.exports = router
