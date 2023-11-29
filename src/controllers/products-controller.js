import { productsService } from "../services/index.js";

async function post(req, res) {
    const { name, categoryId } = req.body;
    const newProduct = await productsService.create(name, categoryId);

    res.send(newProduct);
}

async function getAll(req, res) {
    const products = await productsService.getAll();

    res.send(products);
}

export const productsController = {
    post, getAll
};
