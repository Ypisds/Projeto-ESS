const express = require('express');
const cors = require('cors');

const port = 3001;

const server = express();

server.use(cors());
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

const reservaRecorrenteRoutes = require('../api/routes/reserva.recorrente.routes.js');
server.use('/reservarecorrente', reservaRecorrenteRoutes);

server.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
    }
)

module.exports = server;
