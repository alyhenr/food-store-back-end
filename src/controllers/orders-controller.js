import { ordersService } from "../services/index.js";

async function post(req, res) {
    const { clientId, productId, quantity, total } = req.body;
    const newOrder = await ordersService.create(clientId, productId, quantity, total);

    res.send(newOrder);
}

async function updateStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    const updatedOrder = await ordersService.updateStatus(id, status);

    res.send(updatedOrder);
}

export const ordersController = {
    post, updateStatus
};
