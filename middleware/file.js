const multer = require('multer')

let i = 0
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "./csv")

    },
    filename(req, file, cb) {
        if (i === 0) {
            cb(null, 'pvo.csv')
            i = 1
            return
        }
        if (i === 1) {
            cb(null, 'rp.csv')
            i = 0
        }

    }
})

const allowedTypes = ['application/vnd.ms-excel']

const fileFilter = (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({
    storage, fileFilter
})