const {Router} = require('express')
const router = Router()
const CsvHandler = require('../models/CsvHandler')
const path = require('path')

router.post('/add-fact-data', async (request, response)=> {
    console.log(request.body.id)
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
            response.json({massage: 'все ок'})
        } else {
            response.json({error: true , errorMassage: 'файл не соответвстует'})
        }


    } catch (e){}
})

module.exports = router
