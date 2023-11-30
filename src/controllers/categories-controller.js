import { categoriesService } from "../services/index.js";

async function post(req, res) {
    const { name } = req.body;
    const newCategory = await categoriesService.create(name)

    res.send(newCategory);
}

async function get(req, res) {
    const categories = await categoriesService.findAll();

    res.send(categories);
}

export const categoriesController = {
    post, get
};
