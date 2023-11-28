import appErrors from "../errors/appErrors.js";
import { additionalsRepository } from "../repositories/index.js";

async function create(name, price) {
    const additional = await additionalsRepository.findByName(name);
    if (additional) throw appErrors("Additional already exist").conflict();

    return additionalsRepository.create(name, price);
}

export const additionalsService = {
    create,
};
