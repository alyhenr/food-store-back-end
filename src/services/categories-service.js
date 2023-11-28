import appErrors from "../errors/appErrors.js";
import { categoriesRepository } from "../repositories/index.js";

async function create(name) {
    const existingCategory = await categoriesRepository.findByName(name);
    if (existingCategory) throw appErrors("Category already exist").conflict();

    return categoriesRepository.create(name);
};

export const categoriesService = {
    create
};
