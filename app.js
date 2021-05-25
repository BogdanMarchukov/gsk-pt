const express = require('express')
const app = express()
const config = require('config')
const fileMiddleware = require('./middleware/file')
const AddObject = require('./models/AddObject')
const mongoose = require('mongoose')
const path = require('path')

const PORT = config.get('port') || 5000
app.use(fileMiddleware.array("csv",2))
app.use(express.json({extended: true}))


app.use('/api/add', require('./routes/add.routes'))
app.use('/api', require('./routes/fatchListObject'))
app.use('/api', require('./routes/saveShooting.routes'))


if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}




const start = async () => {
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))


    } catch (e) {
        console.log('server ERROR', e.message)
        process.exit(1)
    }
}


start()









