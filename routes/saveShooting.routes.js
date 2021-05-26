const {Router} = require('express')
const router = Router()
const SaveObject = require('../models/mongoose/SaveObject')

router.post('/save/shooting', async (req, res) => {
    let dataTitle = new Date()
    const filter = {_id: req.body.id}
    const currentObject = await SaveObject.findOne(filter)
    if (currentObject.fact) {
        currentObject.fact[dataTitle] = req.body.data
        await SaveObject.updateOne(filter, currentObject, null, async ()=> {
            const result = await SaveObject.findOne(filter)
            res.send(JSON.stringify(result))
        })
    }else {
        await SaveObject.updateOne(filter, {fact: {
            [dataTitle] : req.body.data
            }}
        , null, async () => {
                const result = await SaveObject.findOne(filter)
                res.send(JSON.stringify(result))
            })
    }



})

module.exports = router