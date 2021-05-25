const {Router} = require('express')
const router = Router()

router.post('/save/shooting', (req, res)=> {
    console.log(req.body)
    res.send('ok')
})

module.exports = router