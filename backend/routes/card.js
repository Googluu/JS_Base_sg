const express = require('express');

const router = express.Router();

const { generateHTML, generateImage } = require('../cards/card');

router.get('/', async (req, res) => {

    let data = {};
    let html = await generateHTML(data);
    let image = await generateImage(html);
    res.contentType('image/jpeg')


    res.end(image, 'binary')
})

module.exports = router;