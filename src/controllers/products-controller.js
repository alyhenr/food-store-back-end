import { productsService } from "../services/index.js";

async function post(req, res) {
    const { name, categoryId } = req.body;
    const newProduct = await productsService.create(name, categoryId);

    res.send(newProduct);
}
export const productsController = {
    post,
};
