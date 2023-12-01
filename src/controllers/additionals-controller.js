import { additionalsService } from "../services/index.js";

async function create(req, res) {
    const { name, imageUrl, description, price } = req.body;

    const newAdditional = await additionalsService.create(name, imageUrl, description, price);

    res.send(newAdditional);
}

async function get(_req, res) {
    const additionals = await additionalsService.findAll();

    res.send(additionals);
}

export const additionalsController = {
    create, get
};
