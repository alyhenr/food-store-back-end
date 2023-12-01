import appErrors from "../errors/appErrors.js";
import { additionalsRepository } from "../repositories/index.js";

async function create(name, imageUrl, description, price) {
    return additionalsRepository.create(name, imageUrl, description, price);
}

async function findAll() {
    return additionalsRepository.findAll();
}

export const additionalsService = {
    create, findAll
};
