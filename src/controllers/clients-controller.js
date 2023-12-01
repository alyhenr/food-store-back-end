import { clientsService } from "../services/index.js";

async function post(req, res) {
    const { name } = req.body;
    const newClient = await clientsService.create(name)

    res.send(newClient);
}

async function get(_req, res) {
    const clients = await clientsService.findAll();

    res.send(clients);
}

export const clientsController = {
    post, get
};
