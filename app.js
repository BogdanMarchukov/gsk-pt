const express = require('express')
const app = express()
const config = require('config')
const fileMiddleware = require('./middleware/file')
//const mongoose = require('mongoose')

const PORT = config.get('port') || 5000
app.use(express.json({extended: true}))
app.use(fileMiddleware.fields('pvo', 'rp'))

app.use('/api/add', require('./routes/add.routes'))


const start = async () => {
    // try {
    //     await mongoose.connect(config.get('mongoURL'), {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useCreateIndex: true
    //     })
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))


    // } catch (e) {
    //     console.log('server ERROR', e.message)
    //     process.exit(1)
    // }
}

start()



