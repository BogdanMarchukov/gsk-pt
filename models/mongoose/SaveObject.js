const {Schema, model} = require('mongoose')

const saveObject = Schema({
    title: {
        type: String,
        required: true
    },
    pvo: {
        type: Array,
        required: true
    },
    rp: {
        type: Array,
        required: true
    }
})

module.exports = model('SaveObject', saveObject)