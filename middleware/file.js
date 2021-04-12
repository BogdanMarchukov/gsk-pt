const multer = require('multer')
const AddObject = require('../models/AddObject')


const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "./csv")

    },
    filename(req, file, cb) {
        if (AddObject.state.fileIndex === 0) {
            cb(null, 'pvo.csv')
            AddObject.state.fileIndex = 1
            return
        }
        if (AddObject.state.fileIndex === 1) {
            cb(null, 'rp.csv')
            AddObject.state.fileIndex = 0
        }

    }
})

const allowedTypes = ['application/vnd.ms-excel']

const fileFilter = (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
        AddObject.error()
        i = 0
    }
}

module.exports = multer({
    storage, fileFilter
})