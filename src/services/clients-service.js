import appErrors from "../errors/appErrors.js";
import { clientsRepository } from "../repositories/index.js";


async function create(name) {
    const existingClient = await clientsRepository.findByName(name);

    if (existingClient) throw appErrors("Client already exist").conflict(); //TODO

    return clientsRepository.create(name);
}

async function findAll() {
    return clientsRepository.findAll();
}

export const clientsService = {
    create, findAll
};
