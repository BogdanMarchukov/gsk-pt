const {Router} = require('express')
const router = Router()

router.post('/save', async (req, res) => {
    let {nameObj} = {...req.body}
    console.log(nameObj)
    res.send('12')
})

module.exports = router