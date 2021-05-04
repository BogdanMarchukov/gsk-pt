const AddObject = require('../models/AddObject')
const SaveObject = require('../models/mongoose/SaveObject')

const {Router} = require('express')
const router = Router()

router.post('/save', async (req, res) => {
    try {
        const result = await AddObject.start()
        const addObject = new SaveObject({
            title: req.body.nameObj,
            pvo: AddObject.state.pvo,
            rp: AddObject.state.rp
        })
        if (AddObject.state.error === null) {
            await addObject.save()
        }

        res.send(JSON.stringify(result))
        AddObject.restartSate()
    } catch (e) {
        console.log(e)
    }


})

module.exports = router