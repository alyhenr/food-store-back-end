import appErrors from "../errors/appErrors.js";
import { additionalsRepository, clientsRepository, ordersRepository, productsRepository } from "../repositories/index.js";

async function bindAdditionalToOrder(orderId, additionalId) {
    return await additionalsRepository.additionalToOrder(orderId, additionalId);
}

async function validateAdditional(additionalId) {
    const additional = await additionalsRepository.findById(additionalId);

    if (!additional) throw appErrors("Additional does not exist").badRequest();
}

async function create(clientId, productId, quantity, total, additionals) {
    const product = await productsRepository.findById(id);
    if (!product) throw appErrors("Product not found").notFound();

    const client = await clientsRepository.findById(id);
    if (!client) throw appErrors("Client not found").notFound();

    for (let i = 0; i < additionals.length; ++i) {
        await validateAdditional(additionals[i].id);
    }

    const newOrder = await ordersRepository.create(clientId, productId, quantity, total);

    for (let i = 0; i < additionals.length; ++i) {
        await bindAdditionalToOrder(orderId, additionals[i].id);
    }

    return newOrder;
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
