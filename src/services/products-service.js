import appErrors from "../errors/appErrors.js";
import { productsRepository } from "../repositories/index.js";

async function create(name, imageUrl, description, price, categoryId) {
    const existingProduct = await productsRepository.findByNameAndCategory(name, categoryId);
    if (existingProduct) throw appErrors("Product already registered").conflict();

    return productsRepository.create(name, imageUrl, description, price, categoryId);
};

function getAll() {
    return productsRepository.findAll();
}

export const productsService = {
    create, getAll
};
