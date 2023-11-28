import { clientsService } from "../services/clients-service.js";

async function post(req, res) {
    const { name } = req.body;
    const newClient = await clientsService.create(name)

    res.send(newClient);
}
export const clientsController = {
    post,
};
