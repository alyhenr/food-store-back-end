import { categoriesService } from "../services/index.js";

async function post(req, res) {
    const { name } = req.body;
    const newCategory = await categoriesService.create(name)

    res.send(newCategory);
}
export const categoriesController = {
    post,
};
