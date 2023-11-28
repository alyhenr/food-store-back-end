import appErrors from "../errors/appErrors.js";
import { productsRepository } from "../repositories/index.js";

async function create(name, categoryId) {
    const existingProduct = await productsRepository.findByNameAndCategory(name, categoryId);
    if (existingProduct) throw appErrors("Product already registered").conflict();

    return productsRepository.create(name, categoryId);
};

export const productsService = {
    create
};
