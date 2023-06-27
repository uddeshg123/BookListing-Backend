const mongoose = require('mongoose');
const { stringify } = require('querystring');

const books = mongoose.Schema({
    title: { type: String, required: true },
    discount: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    book_id: { type: Number, required: true },
    status: { type: Number },
    author_name: { type: String, required: true },
    image: { type: String, required: false },
    created_date: { type: Date },

})

module.exports = mongoose.model('books', books);