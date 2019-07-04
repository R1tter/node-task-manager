const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    descricao: {
        type: String,
        required: true,
        trim: true

    },
    completado: {
        type: Boolean,
        default: false
    }

})

module.exports = Task