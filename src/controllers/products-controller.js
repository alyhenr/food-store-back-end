import { productsService } from "../services/index.js";

async function post(req, res) {
    const { name, imageUrl, description, price, categoryId } = req.body;
    const newProduct = await productsService.create(name, imageUrl, description, Number(price), categoryId);

    res.send(newProduct);
}

async function getAll(_req, res) {
    const products = await productsService.getAll();

    res.send(products);
}

export const productsController = {
    post, getAll
};
