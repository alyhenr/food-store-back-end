import appErrors from "../errors/appErrors.js";
import { clientsRepository } from "../repositories/clients-repository.js";


async function create(name) {
    const existingClient = await clientsRepository.findByName(name);

    if (existingClient) throw appErrors("Client already exist").conflict(); //TODO

    return clientsRepository.create(name);
}

export const clientsService = {
    create,
};
