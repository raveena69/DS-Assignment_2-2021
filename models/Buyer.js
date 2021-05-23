const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buyerSchema = new Schema({
    itemName:{
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Student = mongoose.model("Buyer", buyerSchema);

module.exports = Student;