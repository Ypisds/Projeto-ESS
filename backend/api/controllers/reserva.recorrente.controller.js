const fs = require('fs');
const path = require('path');

const postReservaRecorrente = async (req, res) => {
    try {

    }
    catch(error) {
        console.log("Error in postReservaRecorrente:", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

const deleteReservaRecorrente = async (req, res) => {
    try {

    }
    catch(error) {
        console.log("Error in postReservaRecorrente:", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

const getReservaRecorrente = async (req, res) => {
    try {
        const data = JSON.parse(path.resolve('./mock/recursos.json'), 'utf-8');
        if(!data) {
            console.log("No data");
            return res.status(500).json({});
        }

        return res.status(200).json(data);
    }
    catch(error) {
        console.log("Error in postReservaRecorrente:", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

const getReservaRecorrenteById = async (req, res) => {
    try {

    }
    catch(error) {
        console.log("Error in postReservaRecorrente:", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

module.exports = {postReservaRecorrente, deleteReservaRecorrente, getReservaRecorrente, getReservaRecorrenteById};