const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'csv')

    },
    filename(req, file, cb) {
        cb(null, file.originalname)
    }
})

const allowedTypes = ['text/csv']

const filFilter = (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

module.exports = multer({
    storage, filFilter
})