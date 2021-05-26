const {Schema, model} = require('mongoose')

const saveObject = Schema({
    title: {
        type: String,
        required: false
    },
    pvo: {
        type: Array,
        required: false
    },
    rp: {
        type: Array,
        required: false
    },
    fact: {
        type: Object,
        required: false
    }
})

module.exports = model('SaveObject', saveObject)