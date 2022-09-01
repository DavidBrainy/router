const { request, response } = require("express");

const getProduucts = (request, response) =>{
    response.status(200).send("Get all products");
};

const createProduuct = (request, response) =>{
    response.status(201).send("Product has been created");
};

const updateProduuct = (request, response) =>{
    response.status(200).send("Product has been updated");
};

const deleteProduuct = (request, response) =>{
    response.status(200).send("Product has been deleted");
};

module.exports = {
    getProduucts,
    createProduuct,
    updateProduuct,
    deleteProduuct,
};