const {Router} = require('express')
const router = Router()

router.post('/rp/file', (req, res)=> {
    console.log(req.body)
})

module.exports = router