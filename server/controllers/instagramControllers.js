const db = require("../models")

module.exports = {
    postProductInstagram: async (req, res) => {
        try {
            const { link } = req.body
            const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp']

            if (!req.file) throw "Picture is required"
            if (!allowedTypes.includes(req.file.mimetype)) throw "Invalid file type"
            if (!link) throw "Link is required"

            await db.instagram.create({
                feed: req.file.filename,
                link: link
            })

            res.status(201).send("Product Instagram Created!")

        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    getProductInstagram: async (req, res) => {
        try {
            const response = await db.instagram.findAll({
                limit: 12,
                offset: 0,
                order: [['createdAt', 'DESC']]
            })
            res.status(201).send(response)
        } catch (err) {
            console.log(err)
            res.status(401).send(err)
        }
    },
    getProductInstagramForDelete: async (req, res) => {
        try {
            const response = await db.instagram.findAll({
                attributes: ['link', 'id']
            })
            res.status(201).send(response)
        } catch (err) {
            console.log(err)
            res.status(401).send(err)
        }
    },
    deleteProductInstagram: async (req, res) => {
        try {
            await db.instagram.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(201).send("Instagram Deleted!")
        } catch (err) {
            console.log(err)
            res.status(401).send(err)
        }
    }
}