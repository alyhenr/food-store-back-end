import { additionalsService } from "../services/index.js";

async function create(req, res) {
    const { name, price } = req.body;

    const newAdditional = await additionalsService.create(name, price);

    res.send(newAdditional);
}

export const additionalsController = {
    create,
};
