import { ordersService } from "../services/index.js";

async function post(req, res) {
    const { clientName, productId, quantity, total, paymentMethod, additionals, observations } = req.body;
    const newOrder = await ordersService.create(clientName, productId, quantity, total, paymentMethod, observations, additionals);

    res.send(newOrder);
}

async function get(_req, res) {
    const orders = await ordersService.findAll();

    res.send(orders);
}

async function updateStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    const updatedOrder = await ordersService.updateStatus(id, status);

    res.send(updatedOrder);
}

export const ordersController = {
    post, get, updateStatus,
};
