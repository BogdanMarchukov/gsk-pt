const {Router} = require('express')
const router = Router()

router.post('/save', (req, res) => {
    console.log(req)
    let test = {
        age: 23,
        name: "Bogdan"
    }
    res.send(JSON.stringify(test))
})

module.exports = router