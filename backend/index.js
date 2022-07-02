const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

const cardRoutes = require('./routes/card');

app.use('/cards', cardRoutes);

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`REAST API started and listening at http://localhost:${port}`)
})