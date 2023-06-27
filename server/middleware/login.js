module.exports = (req, res, next) => {
    console.log(req.body.email);
    try {

        console.log(req.body.email);
        if (req.body.email != '' || typeof req.body.email !== 'undefined') {
            next();
        } else {
            res.status(401).json({ message: "Enter your email address" });
        }

    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
};