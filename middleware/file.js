const multer = require('multer')
const AddObject = require('../models/AddObject')


const storage = multer.diskStorage({
    destination(req, file, cb) {
        if (file.fieldname === 'csv') {
            cb(null, "./csv")
        }
        if (file.fieldname === 'dataFile') {
            cb(null, "./uploads")
        }
        if (file.fieldname === 'file') {
            cb(null, "./uploads")
        }

    },
    filename(req, file, cb) {
        if (file.fieldname === 'csv') {
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
        if (file.fieldname === "dataFile") {
            cb(null, 'editRp.csv')
        }
        if (file.fieldname === "file") {
            cb(null, 'factDataRp.csv')
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
    }
}

module.exports = multer({
    storage, fileFilter
})