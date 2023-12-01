import appErrors from "../errors/appErrors.js";
import { categoriesRepository } from "../repositories/index.js";

async function create(name, imageUrl) {
    const existingCategory = await categoriesRepository.findByName(name);
    if (existingCategory) throw appErrors("Category already exist").conflict();

    return categoriesRepository.create(name, imageUrl);
};

function findAll() {
    return categoriesRepository.findAll();
}

export const categoriesService = {
    create, findAll
};
