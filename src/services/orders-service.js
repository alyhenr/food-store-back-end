import appErrors from "../errors/appErrors.js";
import { clientsRepository, ordersRepository, productsRepository } from "../repositories/index.js";

async function create(clientId, productId, quantity, total) {
    const product = await productsRepository.findById(id);
    if (!product) throw appErrors("Product not found").notFound();

    const client = await clientsRepository.findById(id);
    if (!client) throw appErrors("Client not found").notFound();

    return ordersRepository.create(clientId, productId, quantity, total);
};

async function updateStatus(id, status) {
    const order = await ordersRepository.findById(id);
    if (!order) throw appErrors("Order not found").notFound();

    if (order.status === 'FINISHED') throw appErrors("Order already finished").forbidden();
    if (order.status === 'CANCELLED') throw appErrors("Order was cancelled").forbidden();

    return ordersRepository.updateStatus(id, status);
}

export const ordersService = {
    create, updateStatus
};
