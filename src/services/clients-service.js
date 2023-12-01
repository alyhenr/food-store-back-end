import { clientsRepository } from "../repositories/index.js";

function create(name) {
    //Not checking if client already exist anymore, because a code field was added, so the same client can exist with different orders and
    // different codes are going to be generate
    return clientsRepository.create(name);
}

async function findAll() {
    return clientsRepository.findAll();
}

export const clientsService = {
    create, findAll
};
