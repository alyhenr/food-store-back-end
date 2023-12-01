import { categoriesService } from "../services/index.js";

async function post(req, res) {
    const { name, imageUrl } = req.body;
    const newCategory = await categoriesService.create(name, imageUrl)

    res.send(newCategory);
}

async function get(req, res) {
    const categories = await categoriesService.findAll();

    res.send(categories);
}

export const categoriesController = {
    post, get
};
