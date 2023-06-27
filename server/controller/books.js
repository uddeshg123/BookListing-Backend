const express = require("express");

const Books = require("../entity/books");

const router = express.Router();

router.post("", (req, res, next) => {
    const users = new Books({
        title: req.body.title,
        discount: req.body.discount,
        price: req.body.price,
        description: req.body.description,
        status: 1,
        author_name: req.body.author_name,
        created_date: new Date(),
        image: req.body.image,
        book_id: new Date().getTime()
    });

    users.save().then(() => {
        console.log('book added successfully!');
        res.status(201).json({
            'status': true,
            'message': 'Book added successfully!'
        });
    }).catch((e) => {
        res.status(401).json({
            'status': false,
            'error': e,
            'message': 'Something went wrong!'
        });
    });
});



router.get("/:id", (req, res, next) => {
    Books.findById(req.params.id).then(post => {
        console.log(post)
        if (post) {
            res.status(200).json({
                message: "Book fetched successfully!",
                status: true,
                book: post
            });
        } else {
            res.status(400).json({
                message: "Books fetched successfully!",
                status: false,
                book: {}
            });
        }
    });
});

router.get("", (req, res, next) => {
    let page = req.query.page;
    let limit = req.query.limit;

    try {
        Books.find().then(documents => {
            res.status(200).json({
                message: "Books fetched successfully!",
                count: documents.length,
                books: documents.slice(((page - 1) * limit), (limit * page)),
            });
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e });
    }
});

module.exports = router;