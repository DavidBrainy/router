const router = require("express").Router;
const {
    createProduuct,
    deleteProduuct,
    getProduucts,
    updateProduuct,
} = require("../controllers/products.controllers");

const productRouter = router();

productRouter.get("/", getProduucts);
productRouter.post("/", createProduuct);
productRouter.patch("/", updateProduuct);
productRouter.delete("/", deleteProduuct);

module.exports = productRouter;